import { Link, useNavigate, useParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ResourcePreview from "../../components/resources/ResourcePreview";
import SEO from "../../components/common/SEO";
import EmptyState from "../../components/common/EmptyState";

import { getResourceBySlug } from "../../services/resourceService";

function Resource() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const resource = getResourceBySlug(slug);

    if (!resource) {
        return (
            <div className="app">
                <SEO
                    title="Resource Not Found"
                    description="The Grolance resource you are looking for could not be found."
                />

                <Navbar />

                <main>
                    <section className="resource-not-found">
                        <PageContainer>
                            <EmptyState
                                title="Resource not found"
                                description="This resource may have been moved or is no longer available."
                                actionLabel="View all resources"
                                onAction={() => navigate("/resources")}
                            />
                        </PageContainer>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    return (
        <div className="app resource-page">
            <SEO
                title={resource.title}
                description={resource.description}
                image={resource.preview}
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <div className="resource-detail-header">
                            <span className="section-kicker">
                                {resource.type}
                            </span>

                            <h1>{resource.title}</h1>

                            <p>{resource.description}</p>

                            <div className="resource-detail-meta">
                                <span>{resource.format}</span>

                                {resource.isFree && (
                                    <span>FREE</span>
                                )}
                            </div>
                        </div>
                    </PageContainer>
                </section>

                <section className="resource-detail-content">
                    <PageContainer>
                        <div className="resource-detail-grid">
                            <div className="resource-detail-preview">
                                <ResourcePreview type={resource.type} />
                            </div>

                            <div className="resource-detail-info">
                                <h2>About this resource</h2>

                                <p>{resource.description}</p>

                                {resource.isFree && resource.file ? (
                                    <a
                                        href={resource.file}
                                        download
                                        className="resource-download-button"
                                    >
                                        Download resource
                                        <span>↓</span>
                                    </a>
                                ) : (
                                    <span className="resource-download-button disabled">
                                        Coming soon
                                    </span>
                                )}

                                <Link
                                    to="/resources"
                                    className="resource-back-link"
                                >
                                    ← Back to resources
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

export default Resource;