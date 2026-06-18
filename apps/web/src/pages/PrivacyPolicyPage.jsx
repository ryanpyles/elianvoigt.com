import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Protocol — Elian Voigt</title>
        <meta name="description" content="Privacy policy for Elian Voigt." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-24">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-4xl"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Document Reference: PRIV-001
              </div>
              <h1 className="font-serif text-6xl md:text-8xl mb-16 ink-bleed">Privacy Protocol</h1>

              <div className="prose prose-invert prose-lg max-w-none font-serif leading-relaxed text-foreground/90 space-y-12">
                <section>
                  <h2 className="font-serif text-3xl mb-6 border-b border-border/30 pb-4">Information We Collect</h2>
                  <p>
                    When you subscribe to the Elian Voigt newsletter, we collect your email address 
                    and optionally your first name. This information is stored securely and used solely 
                    for the purpose of sending you updates about new books, excerpts, and field notes.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-6 border-b border-border/30 pb-4">How We Use Your Information</h2>
                  <p>
                    Your email address and name are used exclusively to send you newsletter updates. 
                    We do not sell, rent, or share your information with third parties for marketing purposes. 
                    We do not use your data for any purpose other than delivering the content you subscribed to receive.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-6 border-b border-border/30 pb-4">Data Storage and Security</h2>
                  <p>
                    Your subscriber information is stored in a secure database with restricted access. 
                    We implement industry-standard security measures to protect your data from unauthorized 
                    access, disclosure, or modification.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-6 border-b border-border/30 pb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2 ml-4 font-mono text-sm">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of any inaccurate information</li>
                    <li>Request deletion of your information at any time</li>
                    <li>Unsubscribe from the newsletter at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-3xl mb-6 border-b border-border/30 pb-4">Cookies and Tracking</h2>
                  <p>
                    This website does not use cookies or tracking technologies. We do not collect analytics 
                    data about your browsing behavior. Your visit to this site is private.
                  </p>
                </section>

                <p className="font-mono text-xs text-muted-foreground mt-16 pt-8 border-t border-border/30 uppercase tracking-widest">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicyPage;