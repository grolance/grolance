import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";

function Privacy() {
    return (
        <div className="app">
            <SEO
                title="Privacy Policy"
                description="Read the Grolance Privacy Policy and learn how information may be collected, used and protected when you use the website."
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
                                Privacy
                                <span> Policy.</span>
                            </h1>

                            <p>
                                This Privacy Policy explains how Grolance may
                                collect, use and protect information when you
                                visit or use the website.
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
                                Grolance respects your privacy and aims to be
                                transparent about the information that may be
                                collected through the website and how that
                                information may be used.
                            </p>

                            <h2>1. Information We Collect</h2>

                            <p>
                                Grolance may collect information that you
                                voluntarily provide, such as your name and
                                email address when you contact us, subscribe
                                to a newsletter or otherwise interact with
                                services that request information.
                            </p>

                            <p>
                                We may also receive basic technical or usage
                                information when you visit the website, such
                                as browser information, device information,
                                pages viewed and general website activity.
                            </p>

                            <h2>2. How We Use Information</h2>

                            <p>
                                Information may be used to respond to
                                enquiries, provide requested services,
                                deliver newsletter communications, improve
                                website functionality and understand how
                                visitors use Grolance.
                            </p>

                            <p>
                                We may also use information to maintain
                                website security, prevent misuse and improve
                                our content, resources and user experience.
                            </p>

                            <h2>3. Cookies and Similar Technologies</h2>

                            <p>
                                Grolance may use cookies and similar
                                technologies to support website functionality,
                                remember preferences, understand usage and
                                improve the user experience.
                            </p>

                            <p>
                                You can manage your cookie preferences through
                                the cookie controls provided on the website.
                                More information is available in our
                                <a href="/cookies"> Cookie Policy</a>.
                            </p>

                            <h2>4. Newsletter and Communications</h2>

                            <p>
                                If you choose to subscribe to a Grolance
                                newsletter or provide your email address for
                                communications, your information may be used
                                to send the communications you requested.
                            </p>

                            <p>
                                You can unsubscribe from marketing or newsletter
                                communications where an unsubscribe option is
                                provided.
                            </p>

                            <h2>5. Third-Party Services</h2>

                            <p>
                                Some website functionality may rely on
                                third-party services, such as analytics,
                                hosting, email, payment or other technology
                                providers.
                            </p>

                            <p>
                                Those services may process information
                                according to their own terms and privacy
                                policies. Where appropriate, users should
                                review the privacy practices of those services.
                            </p>

                            <h2>6. Data Security</h2>

                            <p>
                                Grolance takes reasonable measures to protect
                                information from unauthorized access, misuse,
                                loss or disclosure.
                            </p>

                            <p>
                                However, no internet-based service or method
                                of electronic transmission can guarantee
                                absolute security.
                            </p>

                            <h2>7. Data Retention</h2>

                            <p>
                                Information may be retained for as long as
                                reasonably necessary for the purpose for which
                                it was collected, to provide requested
                                services, meet operational requirements or
                                comply with applicable obligations.
                            </p>

                            <h2>8. Your Choices</h2>

                            <p>
                                Depending on the information and service
                                involved, you may have choices regarding
                                communications, cookies and information you
                                provide to Grolance.
                            </p>

                            <p>
                                You may also contact us if you have questions
                                about information associated with your
                                interactions with Grolance.
                            </p>

                            <h2>9. Changes to This Policy</h2>

                            <p>
                                Grolance may update this Privacy Policy from
                                time to time to reflect changes to the website,
                                services or applicable requirements.
                            </p>

                            <p>
                                Any updated version will be published on this
                                page with a revised “Last Updated” date.
                            </p>

                            <h2>10. Contact</h2>

                            <p>
                                For privacy-related questions or requests,
                                contact Grolance at:
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

export default Privacy;