import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";

function Cookies() {
    return (
        <div className="app">
            <SEO
                title="Cookie Policy"
                description="Learn how Grolance may use cookies and similar technologies to support website functionality, preferences and analytics."
            />

            <Navbar />

            <main>
                <section className="page-header legal-page-header">
                    <PageContainer>
                        <div className="legal-intro">
                            <span className="section-kicker">
                                GROLANCE · LEGAL
                            </span>

                            <h1>
                                Cookie
                                <span> Policy.</span>
                            </h1>

                            <p>
                                This Cookie Policy explains how cookies and
                                similar technologies may be used on the
                                Grolance website.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className="legal-content">
                    <PageContainer>
                        <article className="legal-document">
                            <div className="legal-document-meta">
                                <span>LAST UPDATED</span>
                                <strong>02 OCTOBER 2026</strong>
                            </div>

                            <p>
                                This Cookie Policy explains what cookies and
                                similar technologies are, how Grolance may
                                use them and how you can manage your choices.
                            </p>

                            <h2>1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that websites may
                                store on your device. They can help websites
                                remember information, support functionality
                                and understand how visitors use the site.
                            </p>

                            <h2>2. How Grolance May Use Cookies</h2>
                            <p>
                                Grolance may use cookies or similar
                                technologies for essential website
                                functionality, preferences, analytics and
                                other features that may be introduced in the
                                future.
                            </p>

                            <h2>3. Essential Cookies</h2>
                            <p>
                                Some cookies or similar technologies may be
                                necessary for certain website features to
                                function correctly.
                            </p>

                            <p>
                                Disabling necessary technologies may affect
                                some parts of the website or prevent certain
                                features from working as intended.
                            </p>

                            <h2>4. Analytics</h2>
                            <p>
                                If analytics services are enabled, Grolance
                                may use them to understand general website
                                usage, such as page visits, traffic patterns
                                and user interactions, in order to improve
                                the website.
                            </p>

                            <h2>5. Third-Party Cookies</h2>
                            <p>
                                Third-party services used by Grolance may
                                place or access their own cookies or similar
                                technologies.
                            </p>

                            <p>
                                The use of those technologies is governed by
                                the respective privacy and cookie policies of
                                those third-party services.
                            </p>

                            <h2>6. Managing Cookies</h2>
                            <p>
                                Most browsers allow you to control, block or
                                delete cookies through their settings.
                            </p>

                            <p>
                                Where cookie controls are provided on Grolance,
                                you may also use them to manage your choices
                                regarding optional cookies.
                            </p>

                            <h2>7. Cookie Consent</h2>
                            <p>
                                When applicable, Grolance may display a cookie
                                consent notice to new visitors. Your selected
                                preference may be stored so that the notice
                                does not appear repeatedly.
                            </p>

                            <h2>8. Changes to This Policy</h2>
                            <p>
                                This Cookie Policy may be updated when website
                                functionality, services, technologies or
                                applicable requirements change.
                            </p>

                            <p>
                                Any updated version will be published on this
                                page with a revised “Last Updated” date.
                            </p>

                            <h2>9. Contact</h2>
                            <p>
                                If you have questions about cookies on
                                Grolance, contact us at:
                            </p>

                            <a
                                href="mailto:grolance.media@gmail.com"
                                className="legal-email"
                            >
                                grolance.media@gmail.com
                            </a>
                        </article>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Cookies;