import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";

function About() {
    return (
        <div className="app">
            <SEO
                title="About Grolance"
                description="Learn about Grolance, a business media platform sharing useful insights, startup stories, AI trends, growth ideas, resources and practical tools."
            />

            <Navbar />

            <main>
                <section className="page-header about-page-header">
                    <PageContainer>
                        <div className="about-intro">
                            <span className="section-kicker">
                                ABOUT GROLANCE
                            </span>

                            <h1>
                                Business ideas,
                                <br />
                                <span>worth knowing.</span>
                            </h1>

                            <p>
                                Grolance is a business media platform for people
                                building, growing and learning about modern business.
                                We bring together useful insights, startup stories,
                                AI &amp; technology, growth ideas, resources and
                                practical tools.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className="about-content">
                    <PageContainer>
                        <div className="about-grid">
                            <div className="about-block">
                                <span className="section-kicker">
                                    OUR PURPOSE
                                </span>

                                <h2>
                                    Make business knowledge
                                    <span> easier to use.</span>
                                </h2>
                            </div>

                            <div className="about-block">
                                <p>
                                    Grolance explores business, startups, AI &amp;
                                    technology, marketing, finance and growth through
                                    accessible insights, practical resources and
                                    useful tools.
                                </p>

                                <p>
                                    Our aim is to make useful business information
                                    easier to discover, understand and apply — whether
                                    you are starting something new, running a growing
                                    business or simply curious about how modern
                                    businesses work.
                                </p>
                            </div>
                        </div>

                        <div className="about-values">
                            <article>
                                <span>01</span>
                                <h3>Useful</h3>
                                <p>
                                    We focus on information, ideas and resources that
                                    people can understand and use in the real world.
                                </p>
                            </article>

                            <article>
                                <span>02</span>
                                <h3>Curious</h3>
                                <p>
                                    We explore emerging technologies, business models,
                                    markets, opportunities and changing trends.
                                </p>
                            </article>

                            <article>
                                <span>03</span>
                                <h3>Practical</h3>
                                <p>
                                    We turn complex topics into clear insights,
                                    resources and tools that make learning more useful.
                                </p>
                            </article>
                        </div>

                        <div className="about-cta">
                            <h2>
                                Explore what Grolance
                                <span> has to offer.</span>
                            </h2>

                            <p>
                                Discover ideas, insights and resources designed for
                                curious builders and growing businesses.
                            </p>

                            <div className="about-cta-actions">
                                <Link to="/insights">
                                    Explore Insights →
                                </Link>

                                <Link to="/resources">
                                    View Resources →
                                </Link>
                            </div>
                        </div>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default About;