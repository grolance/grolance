import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ToolGrid from "../../components/tools/ToolGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { tools } from "../../data/tools";

function Tools() {
    return (
        <div className="app">
            <SEO
                title="Business Tools"
                description="Useful business and AI tools for founders, entrepreneurs and growing businesses."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE TOOLS"
                            title="Tools for"
                            highlight="better decisions."
                            description="Simple business and AI-powered tools designed to help founders and entrepreneurs work smarter."
                        />
                    </PageContainer>
                </section>

                <section className="tools-page-content">
                    <PageContainer>
                        {tools.length > 0 ? (
                            <ToolGrid tools={tools} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>Tools coming soon.</h2>

                                <p>
                                    We are preparing useful business and AI tools
                                    for Grolance.
                                </p>

                                <Link to="/">
                                    Back to home →
                                </Link>
                            </div>
                        )}
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Tools;