import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";

function Cookies() {
    return (
        <div className="app">
            <SEO
                title="Cookie Policy"
                description="Learn how Grolance uses cookies and similar technologies to support website functionality, preferences and usage insights."
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
                                Learn how Grolance may use cookies and similar
                                technologies to support website functionality,
                                preferences and usage insights.
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
                                similar technologies may be used for when you
                                visit or use the Grolance website.
                            </p>

                            <h2>1. What Are Cookies?</h2>
                            <p>
                                Cookies are small pieces of information that
                                websites may store on your browser or device.
                                They can help websites remember preferences,
                                support functionality and understand how
                                visitors use a website.
                            </p>

                            <h2>2. How Grolance May Use Cookies</h2>
                            <p>
                                Grolance may use cookies or similar technologies
                                for purposes such as supporting website
                                functionality, remembering preferences,
                                understanding website usage and improving the
                                user experience.
                            </p>

                            <h2>3. Types of Cookies</h2>
                            <p>
                                Depending on the features available on the
                                website, cookies may include necessary cookies,
                                preference-related cookies, analytics cookies
                                or other technologies used to support website
                                functionality.
                            </p>

                            <h2>4. Necessary Cookies</h2>
                            <p>
                                Necessary technologies may be used to support
                                essential website functionality, security,
                                navigation or other features required for the
                                website to operate properly.
                            </p>

                            <h2>5. Analytics and Performance</h2>
                            <p>
                                If analytics or similar services are enabled,
                                information about website usage may be collected
                                to understand traffic, performance and how
                                visitors interact with Grolance.
                            </p>

                            <h2>6. Your Cookie Choices</h2>
                            <p>
                                Where cookie controls are provided, you can
                                choose whether to accept optional cookies or
                                allow only necessary technologies.
                            </p>

                            <p>
                                You can also manage or delete cookies through
                                your browser settings. Disabling certain
                                cookies may affect some website functionality.
                            </p>

                            <h2>7. Third-Party Services</h2>
                            <p>
                                Some Grolance features may use third-party
                                services that can place or access cookies or
                                similar technologies according to their own
                                policies.
                            </p>

                            <p>
                                Where applicable, you should review the privacy
                                and cookie policies of those third-party
                                services.
                            </p>

                            <h2>8. Changes to This Policy</h2>
                            <p>
                                Grolance may update this Cookie Policy when
                                website features, technologies or applicable
                                requirements change.
                            </p>

                            <p>
                                Any updated version will be published on this
                                page with a revised “Last Updated” date.
                            </p>

                            <h2>9. Contact</h2>
                            <p>
                                If you have questions about cookies or this
                                Cookie Policy, contact Grolance at:
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