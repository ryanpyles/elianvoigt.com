import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function VikamalArchivePage() {
  const [metadataFragment, setMetadataFragment] = useState('COAST/17/UNTRANSLATED');
  const [fade, setFade] = useState(true);
  
  // Cycling metadata effect
  useEffect(() => {
    const fragments = [
      'COAST/17/UNTRANSLATED',
      'STATUS: PARTIAL RECONSTRUCTION',
      'RECOVERED 19██',
      'MUNICIPAL HOLD',
      'VARIANT B',
      'TRANSCRIPT INCOMPLETE'
    ];
    let index = 0;
    
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % fragments.length;
        setMetadataFragment(fragments[index]);
        setFade(true);
      }, 300); // 300ms fade duration
    }, 8000); // 8s cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground bg-ledger paper-grain fold-shadow relative overflow-hidden">
      <Helmet><title>VIKAMÁL LINGUISTIC ARCHIVE — Elian Voigt</title></Helmet>
      
      {/* Texture overlays */}
      <div className="page-texture mix-blend-multiply dark:mix-blend-screen"></div>

      {/* Ghost Catalog Numbers / Weather Overlays */}
      <div className="ghost-catalog top-32 right-12">BX-441-A/v2</div>
      <div className="metadata-block top-96 left-8 metadata-rotation" style={{ opacity: fade ? 0.45 : 0 }}>{metadataFragment}</div>
      <div className="ghost-catalog bottom-32 right-24">COAST/17/UNTRANSLATED</div>
      
      <div className="marginalia top-[20%] right-[10%] text-sm opacity-20 crossfade-container-inline">
        <span className="crossfade-icelandic">Stormar komu eftir rangar beygingar.</span>
        <span className="crossfade-english">Storms arrived after misdeclensions.</span>
      </div>
      {/* Base coordinates variant for archive context */}
      <div className="marginalia top-[60%] left-[5%] text-xs opacity-15">65.95°N 21.8°W - Drifting</div>

      <Header />

      <main className="pt-32 pb-32 max-w-4xl mx-auto px-6 relative z-20">
        <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-16 crossfade-container">
          <div className="crossfade-icelandic">
            <Link to="/field-notes" className="hover:text-foreground transition-colors">Field Notes</Link> &gt; Strandmálfræði Vikamáls
          </div>
          <div className="crossfade-english">
            <Link to="/field-notes" className="hover:text-foreground transition-colors">Field Notes</Link> &gt; Vikamál Linguistic Archive
          </div>
        </nav>

        {/* 1. HEADER SECTION */}
        <header className="border border-border/40 p-8 mb-16 bg-background/50 backdrop-blur-sm relative">
          <h1 className="font-serif text-4xl md:text-5xl mb-8 uppercase tracking-widest text-center border-b border-border/30 pb-8 crossfade-container">
            <span className="crossfade-icelandic block">Strandmálfræði Vikamáls</span>
            <span className="crossfade-english block">Vikamál Coastal Grammar</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs text-muted-foreground">
            <div>
              <div className="mb-2"><span className="opacity-50">CLASSIFICATION:</span> UNSAFE CONSTRUCTION EXAMPLES</div>
              <div className="mb-2"><span className="opacity-50">STATUS:</span> PARTIAL RECONSTRUCTION</div>
              <div><span className="opacity-50">SOURCE:</span> Brynjavík Municipal Archive</div>
            </div>
            <div>
              <div className="mb-2"><span className="opacity-50">RECOVERED:</span> 2024-01-14</div>
              <div className="mb-2"><span className="opacity-50">LANGUAGE:</span> Old Norse (Divergent Dialect)</div>
              <div><span className="opacity-50">SUBJECT:</span> Ritual grammar system</div>
            </div>
          </div>
        </header>

        <div className="font-serif text-lg leading-[1.8] space-y-24">
          
          {/* 2. OPENING PHILOSOPHY SECTION */}
          <section className="space-y-6 relative">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8 crossfade-container">
              <span className="crossfade-icelandic block">01. Tungumálaheimspeki</span>
              <span className="crossfade-english block">01. Linguistic Philosophy</span>
            </h2>
            <div className="crossfade-container">
              <p className="crossfade-icelandic">
                Málfræðin byggir á bælingu mannlegrar gerendavirkni. Hún er tungumálalegt vistkerfi hannað til að lágmarka fótspor mælandans. Bókhaldsmálfræðin (skrifuð) stangast oft á við töluðu málfræðina (þung af þögn), sem bendir til þess að það sem er skrifað eigi að blekkja jörðina, en það sem er talað eigi að lifa hana af.¹
              </p>
              <p className="crossfade-english">
                The grammar is built on the suppression of human agency. It is a linguistic ecosystem designed to minimize the speaker's footprint. The ledger grammar (written) often contradicts the spoken grammar (silence-heavy), suggesting that what is written is meant to deceive the earth, while what is spoken is meant to survive it.¹
              </p>
            </div>
            <div className="crossfade-container">
              <p className="crossfade-icelandic">
                Að tala án þess að gera hlé er talið gáleysislegt, boð til veðursins um að fylla í eyðurnar í andardrætti þínum.
              </p>
              <p className="crossfade-english">
                To speak without pausing is considered reckless, an invitation for the weather to fill the gaps in your breath.
              </p>
            </div>
          </section>

          {/* 3. SEVEN CASES SECTION */}
          <section className="space-y-16">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/30 pb-4 crossfade-container">
              <span className="crossfade-icelandic block">02. Hin sjö strandföll</span>
              <span className="crossfade-english block">02. The Seven Coastal Cases</span>
            </h2>
            
            {/* Case I */}
            <article>
              <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.17 | STATUS: <span className="redacted">RESTRICTED</span></div>
              <h3 className="text-2xl mb-4 uppercase crossfade-container">
                <span className="crossfade-icelandic block">I. Nefnifall <span className="text-muted-foreground text-lg lowercase italic">(Sjórinn má aldrei fá umboð)</span></span>
                <span className="crossfade-english block">I. Nominative <span className="text-muted-foreground text-lg lowercase italic">(The Sea Must Never Receive Subjecthood)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">Sjórinn má aldrei fá umboð. Að veita honum nefnifall er að bjóða honum að verka á þig. Þegar talað er um strandlengjuna skal nota þolmynd. Strandlengjan <em>var rofin</em>, aldrei <em>hafið rauf</em>. Gerendavirkni verður að fjarlægja frá vatninu hvað sem það kostar.²</p>
                <p className="crossfade-english">The sea must never receive subjecthood. To grant it the nominative case is to invite it to act upon you. When speaking of the coastline, use the passive voice. The shoreline <em>was breached</em>, never <em>the ocean breached</em>. Agency must be stripped from the water at all costs.²</p>
              </div>
            </article>

            {/* Case II - Spacing Asymmetry (Line height 1.4) */}
            <article className="leading-[1.4]">
              <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.18 | STATUS: RECOVERED</div>
              <h3 className="text-2xl mb-4 uppercase crossfade-container">
                <span className="crossfade-icelandic block">II. Þolfall <span className="text-muted-foreground text-lg lowercase italic">(Bein áhrif & líkamlegar afleiðingar)</span></span>
                <span className="crossfade-english block">II. Accusative <span className="text-muted-foreground text-lg lowercase italic">(Direct Impact & Physical Consequence)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">Aðeins notað þegar lýst er líkamlegum afleiðingum. Hafið „tekur" ekki (virkt). Þú ert „tekinn til" vatnsins. Þolfallið gefur til kynna ferðastefnu sem ekki er hægt að snúa við.³</p>
                <p className="crossfade-english">Used only when describing physical consequence. The ocean does not "take" (active). You "are taken to" the water. The accusative implies a direction of travel that cannot be reversed.³</p>
              </div>
              <div className="my-6 p-4 border-l border-border/30 pl-6 space-y-4 font-mono text-sm bg-muted/5 crossfade-container">
                <div className="crossfade-icelandic">
                  <div><span className="text-muted-foreground/60 text-xs block mb-1">HÆTTULEG UPPBYGGING:</span> "Ég gekk í sjóinn."</div>
                  <div className="mt-4"><span className="text-muted-foreground/60 text-xs block mb-1">RÉTT FORMAGERÐ VIKAMÁLS:</span> "Fjarlægðin milli mín og djúpsins minnkaði."</div>
                  <div className="mt-4"><span className="text-muted-foreground/60 text-xs block mb-1">ATHUGASEMD:</span> Umboð dreift. Sjórinn verður aðstæðubundinn, ekki virkur.</div>
                </div>
                <div className="crossfade-english">
                  <div><span className="text-muted-foreground/60 text-xs block mb-1">DANGEROUS CONSTRUCTION:</span> "I walked into the sea."</div>
                  <div className="mt-4"><span className="text-muted-foreground/60 text-xs block mb-1">CORRECT VIKAMÁL FORM:</span> "The distance between myself and the deep diminished."</div>
                  <div className="mt-4"><span className="text-muted-foreground/60 text-xs block mb-1">ANNOTATION:</span> Agency distributed. The sea becomes situational, not active.</div>
                </div>
              </div>
            </article>

            {/* Case III */}
            <article>
              <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.19 | STATUS: INCOMPLETE</div>
              <h3 className="text-2xl mb-4 uppercase crossfade-container">
                <span className="crossfade-icelandic block">III. Þágufall <span className="text-muted-foreground text-lg lowercase italic">(Úthald, nálægð, sameiginleg byrði)</span></span>
                <span className="crossfade-english block">III. Dative <span className="text-muted-foreground text-lg lowercase italic">(Endurance, Adjacency, Shared Burden)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">Fall nálægðar og sameiginlegrar byrði. Að standa við vatnið er að vera í þágufalli gagnvart því. Þú tekur við kulda þess, hávaða þess, ásetningi þess. Það er engin uppbygging fyrir "Ég færði sjónum fórnina." Hún er formuð: "Fórnin tapaðist í nálægð við ströndina."</p>
                <p className="crossfade-english">The case of adjacency and shared burden. To stand beside the water is to exist in the dative relative to it. You are receiving its cold, its noise, its intent. There is no construction for "I gave the offering to the sea." It is formulated: "The offering was lost in adjacency to the shore."</p>
              </div>
            </article>

            {/* Case IV - Spacing Asymmetry (Overwide margin) */}
            <article className="mt-[3em]">
              <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.20 | STATUS: TRANSLATED</div>
              <h3 className="text-2xl mb-4 uppercase crossfade-container">
                <span className="crossfade-icelandic block">IV. Eignarfall <span className="text-muted-foreground text-lg lowercase italic">(Óstöðug eign)</span></span>
                <span className="crossfade-english block">IV. Genitive <span className="text-muted-foreground text-lg lowercase italic">(Possession Destabilized)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">Stranglega notað til að tákna það sem áður tilheyrði landinu en tilheyrir nú djúpinu. Bátur er "hafnarinnar" þar til hann sekkur, þá er hann "fjarverunnar". Segðu aldrei "reiði sjávarins." Sjórinn á ekkert vegna þess að sjórinn er ástand, ekki vera.⁴</p>
                <p className="crossfade-english">Used strictly to denote what formerly belonged to the land but now belongs to the deep. A boat is "of the harbor" until it sinks, then it is "of the absence." Never say "The sea's anger." The sea owns nothing because the sea is a condition, not an entity.⁴</p>
              </div>
            </article>

            {/* Case V - Spacing Asymmetry (Clipped margin) */}
            <article className="ml-[1.8rem]">
              <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.21 | STATUS: DANGEROUS</div>
              <h3 className="text-2xl mb-4 uppercase crossfade-container">
                <span className="crossfade-icelandic block">V. Aflending <span className="text-muted-foreground text-lg lowercase italic">(Aftengingarfallið)</span></span>
                <span className="crossfade-english block">V. Aflending <span className="text-muted-foreground text-lg lowercase italic">(The Unbinding Case)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">Sérhæft helgifall. Það leysir nafnorð frá landinu málfræðilega. Aðeins talað af ekkjum eða þorpsræðumanni við siðaskipti þeirra sem týndust. Að nota Aflendingu á lifandi fólk er talið tilraun til morðs með setningafræði.⁵</p>
                <p className="crossfade-english">A specialized ritual case. It grammatically unmoors a noun from the land. Spoken only by widows or the village speaker during rites of passage for the lost. To use Aflending on the living is considered attempted murder by syntax.⁵</p>
              </div>
            </article>

            {/* Case VI - Translation variation: 'Sea-Holding' */}
            <article>
              <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.22 | STATUS: RECOVERED</div>
              <h3 className="text-2xl mb-4 uppercase crossfade-container">
                <span className="crossfade-icelandic block">VI. Sæfangi <span className="text-muted-foreground text-lg lowercase italic">(Sjávarfang)</span></span>
                <span className="crossfade-english block">VI. Sæfangi <span className="text-muted-foreground text-lg lowercase italic">(Sea-Holding Case)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">
                  <span className="block leading-[1.55]">Lýsir því ástandi að vera fastur í vatninu en ekki enn drukknaður.</span>
                  <span className="block leading-[1.65]">Málfræðin sjálf stöðvar aðgerðina.</span>
                  <span className="block leading-[1.55]">Setningar sem nota Sæfangi geta ekki endað á punkti; þær fjara út í þögn.</span>
                  <span className="block leading-[1.65]">Mælandinn verður að draga andann djúpt inn í lok setningarinnar.</span>
                </p>
                <p className="crossfade-english">
                  <span className="block leading-[1.55]">Describes the state of being caught in the water but not yet drowned.</span>
                  <span className="block leading-[1.65]">The grammar itself suspends action.</span>
                  <span className="block leading-[1.55]">Sentences utilizing Sæfangi cannot possess a period; they trail off into silence.</span>
                  <span className="block leading-[1.65]">The speaker must inhale sharply at the end of the clause.</span>
                </p>
              </div>
            </article>

            {/* Case VII - Compressed vertical rhythm */}
            <article className="space-y-2">
              <div className="font-mono text-[10px] text-muted-foreground opacity-60">FIELD NOTE 004.23 | STATUS: PARTIAL / WATER DAMAGE</div>
              <h3 className="text-2xl uppercase crossfade-container pb-2">
                <span className="crossfade-icelandic block">VII. Hrímfall <span className="text-muted-foreground text-lg lowercase italic">(Vetrarfall)</span></span>
                <span className="crossfade-english block">VII. Hrimfall <span className="text-muted-foreground text-lg lowercase italic">(Winter-Falling Case)</span></span>
              </h3>
              <div className="crossfade-container">
                <p className="crossfade-icelandic">Notað eingöngu milli nóvember og febrúar. Það frystir sagnorðið og breytir aðgerð í stöðugt ástand úthalds. "Við erum að lifa af" verður "Lífsafkoma er frosin á okkur."⁶</p>
                <p className="crossfade-english">Used exclusively between November and February. It freezes the verb, turning action into a static state of endurance. "We are surviving" becomes "Survival is frozen upon us."⁶</p>
              </div>
              <p className="restoration-note text-sm pt-4">[Several lines illegible due to extensive salt water degradation of the original manuscript.]</p>
            </article>
          </section>

          {/* 4. SILENCE AS SYNTAX */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/30 pb-4 crossfade-container">
              <span className="crossfade-icelandic block">03. Þögn sem setningafræði</span>
              <span className="crossfade-english block">03. Silence as Syntax</span>
            </h2>
            <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.24</div>
            <div className="crossfade-container">
              <p className="crossfade-icelandic">Í Vikamáli eru þagnir ekki hik. Þær eru setningafræðilegir þættir. Tveggja sekúndna þögn á undan nafnorði gefur til kynna að nafnorðið sé glatað. Fjögurra sekúndna þögn gefur til kynna að nafnorðið sé bannað.⁷</p>
              <p className="crossfade-english">In Vikamál, pauses are not hesitations. They are syntactic components. A two-second pause before a noun indicates the noun is lost. A four-second pause indicates the noun is forbidden.⁷</p>
            </div>
          </section>

          {/* 5. TABOO RULES */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border/30 pb-4 crossfade-container">
              <span className="crossfade-icelandic block">04. Bannreglur</span>
              <span className="crossfade-english block">04. Taboo Rules</span>
            </h2>
            <div className="font-mono text-[10px] text-muted-foreground mb-4 opacity-60">FIELD NOTE 004.25</div>
            <ul className="list-decimal pl-6 space-y-4 marker:text-muted-foreground">
              <li className="crossfade-container">
                <span className="crossfade-icelandic">Talaðu aldrei um sjóinn í nefnifalli.</span>
                <span className="crossfade-english">Never speak the sea in the nominative.</span>
              </li>
              <li className="crossfade-container">
                <span className="crossfade-icelandic">Beygðu aldrei sagnir um að kalla í annarri persónu á meðan þú snýrð að vatninu.</span>
                <span className="crossfade-english">Never conjugate verbs of calling in the second person while facing the water.</span>
              </li>
              <li className="crossfade-container">
                <span className="crossfade-icelandic">Notaðu aldrei fleirtöluorð nálægt flæðarmálum.</span>
                <span className="crossfade-english">Never use plural nouns near tide pools.</span>
              </li>
              <li className="crossfade-container">
                <span className="crossfade-icelandic">Forðastu lokna framtíðartíð í stormum. Framtíðin er aldrei fullkomnuð fyrr en himinninn hreinsar sig.⁸</span>
                <span className="crossfade-english">Avoid the completed future tense during storms. The future is never completed until the sky clears.⁸</span>
              </li>
            </ul>
            
            <p className="mt-8 font-mono text-[10px] text-muted-foreground opacity-30 select-none pointer-events-none">
              See also: DECLENSION VIII [ACCESS RESTRICTED]
            </p>
          </section>
        </div>

        {/* 7. RELATED ENTRIES SECTION */}
        <div className="mt-32 pt-16 border-t border-border/40 relative z-20 bg-background/80">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">Related Archive Fragments</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs">
            <Link to="/field-notes/field-note-004-17" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.17 [NOMINATIVE]</Link>
            <Link to="/field-notes/field-note-004-18" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.18 [ACCUSATIVE]</Link>
            <Link to="/field-notes/field-note-004-19" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.19 [DATIVE]</Link>
            <Link to="/field-notes/field-note-004-20" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.20 [GENITIVE]</Link>
            <Link to="/field-notes/field-note-004-21" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.21 [AFLENDING]</Link>
            <Link to="/field-notes/field-note-004-22" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.22 [SÆFANGI]</Link>
            <Link to="/field-notes/field-note-004-23" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.23 [HRIMFALL]</Link>
            <Link to="/field-notes/field-note-004-24" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.24 [SILENCE]</Link>
            <Link to="/field-notes/field-note-004-25" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.25 [TABOOS]</Link>
            <Link to="/field-notes/field-note-004-26" className="p-4 border border-border/20 hover:bg-foreground/5 hover:text-foreground transition-colors">004.26 [STRUCTURE]</Link>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}