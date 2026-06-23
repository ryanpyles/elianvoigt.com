// Vercel serverless function — proxies the Substack RSS feed so the site can
// display the latest posts with no CORS issues and no rebuild on each post.
//
// Configure the feed in the Vercel project (Settings → Environment Variables):
//   SUBSTACK_FEED_URL = https://<your-publication>.substack.com/feed
// Falls back to the placeholder below if unset.

const FEED_URL = process.env.SUBSTACK_FEED_URL || 'https://elianvoigt.substack.com/feed';

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'" };

function decode(str = '') {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&(amp|lt|gt|quot|#39|apos);/g, (m) => ENTITIES[m] || m)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return m ? decode(m[1]).trim() : '';
}

function stripHtml(html = '') {
  return decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function firstImage(block) {
  const enc = block.match(/<enclosure[^>]+url="([^"]+)"/i);
  if (enc) return enc[1];
  const img = block.match(/<img[^>]+src=\\?["']([^"'\\]+)/i);
  return img ? img[1] : null;
}

function parseItems(xml) {
  const items = [];
  const re = /<item\b[\s\S]*?<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) && items.length < 12) {
    const block = m[0];
    const description = tag(block, 'description');
    const excerptSource = stripHtml(description) || stripHtml(tag(block, 'content:encoded'));
    items.push({
      title: tag(block, 'title'),
      link: tag(block, 'link'),
      pubDate: tag(block, 'pubDate'),
      excerpt: excerptSource.length > 200 ? excerptSource.slice(0, 200).trim() + '…' : excerptSource,
      image: firstImage(block),
    });
  }
  return items;
}

module.exports = async (req, res) => {
  try {
    const r = await fetch(FEED_URL, { headers: { 'User-Agent': 'elianvoigt-site/1.0' } });
    if (!r.ok) throw new Error(`feed responded ${r.status}`);
    const xml = await r.text();
    const items = parseItems(xml).slice(0, 6);
    // Cache at the edge: serve instantly, refresh in the background ~every 15 min.
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=86400');
    res.status(200).json({ ok: true, count: items.length, items });
  } catch (err) {
    res.status(200).json({ ok: false, items: [], error: String((err && err.message) || err) });
  }
};
