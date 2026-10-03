import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ResourceGrid from "../../components/resources/ResourceGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { getAllResources } from "../../services/resourceService";

function Resources() {
    const resources = getAllResources();

    return (
        <div className="app">
            <SEO
                title="Resources"
                description="Practical templates, guides, checklists and free business resources from Grolance."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE · RESOURCES"
                            title="Resources to"
                            highlight="move faster."
                            description="Practical templates, guides and checklists designed to help founders, entrepreneurs and growing businesses."
                        />
                    </PageContainer>
                </section>

                <section className="resources-page-content">
                    <PageContainer>
                        {resources.length > 0 ? (
                            <ResourceGrid resources={resources} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>Resources coming soon.</h2>

                                <p>
                                    We are preparing practical business
                                    resources for Grolance.
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

export default Resources;