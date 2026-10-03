import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { useArticlesByCategory } from "../../hooks/useArticles";

function Business() {
    const { articles } = useArticlesByCategory("BUSINESS");

    return (
        <div className="app">
            <SEO
                title="Business"
                description="Business ideas, strategies, operations and insights for modern businesses."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE · BUSINESS"
                            title="Build a"
                            highlight="better business."
                            description="Practical business ideas, strategies, operations and insights for modern businesses."
                        />
                    </PageContainer>
                </section>

                <section className="category-page-content">
                    <PageContainer>
                        {articles.length > 0 ? (
                            <ArticleGrid articles={articles} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>Business insights coming soon.</h2>

                                <p>
                                    We are preparing more practical business insights
                                    for Grolance.
                                </p>

                                <Link to="/insights">
                                    Explore all insights →
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

export default Business;