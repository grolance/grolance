import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";

function Advertise() {
    return (
        <div className="app">
            <SEO
                title="Advertise with Grolance"
                description="Explore sponsored content, featured products and partnership opportunities with Grolance."
            />

            <Navbar />

            <main>
                <section className="page-header advertise-page-header">
                    <PageContainer>
                        <div className="advertise-intro">
                            <span className="section-kicker">
                                PARTNER WITH GROLANCE
                            </span>

                            <h1>
                                Put your brand in front of
                                <span> curious builders.</span>
                            </h1>

                            <p>
                                Grolance works with businesses, tools, products
                                and brands that want to reach an audience
                                interested in business, startups, AI,
                                technology and growth.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className="advertise-content">
                    <PageContainer>
                        <div className="advertise-grid">
                            <article className="advertise-card">
                                <span>01</span>

                                <h2>Sponsored Content</h2>

                                <p>
                                    Share your story, product or expertise
                                    through clearly identified sponsored
                                    editorial content designed for relevant
                                    Grolance readers.
                                </p>
                            </article>

                            <article className="advertise-card">
                                <span>02</span>

                                <h2>Featured Products</h2>

                                <p>
                                    Get your business tool, product or resource
                                    featured in relevant Grolance content,
                                    resources or discovery experiences.
                                </p>
                            </article>

                            <article className="advertise-card">
                                <span>03</span>

                                <h2>Partnerships</h2>

                                <p>
                                    Explore content, campaign and other
                                    partnership opportunities around business,
                                    technology and entrepreneurship.
                                </p>
                            </article>
                        </div>

                        <div className="advertise-note">
                            <span>OUR APPROACH</span>

                            <p>
                                We aim to keep commercial partnerships relevant
                                to our audience and clearly distinguish
                                sponsored content from independent editorial
                                coverage.
                            </p>
                        </div>

                        <div className="advertise-cta">
                            <span className="section-kicker">
                                START A CONVERSATION
                            </span>

                            <h2>
                                Have a partnership
                                <span> in mind?</span>
                            </h2>

                            <p>
                                Tell us about your brand, product or campaign,
                                what you are trying to achieve and how you
                                would like to work with Grolance.
                            </p>

                            <Link to="/contact">
                                Contact Grolance
                                <span> →</span>
                            </Link>
                        </div>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Advertise;