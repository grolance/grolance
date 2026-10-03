import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { useArticlesByCategory } from "../../hooks/useArticles";

function Marketing() {
    const { articles } = useArticlesByCategory("MARKETING");

    return (
        <div className="app">
            <SEO
                title="Marketing"
                description="Marketing ideas, customer acquisition, branding and practical growth strategies from Grolance."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE · MARKETING"
                            title="Marketing that"
                            highlight="moves business."
                            description="Explore practical marketing ideas, customer acquisition strategies, branding and ways to build stronger customer relationships."
                        />
                    </PageContainer>
                </section>

                <section className="category-page-content">
                    <PageContainer>
                        {articles.length > 0 ? (
                            <ArticleGrid articles={articles} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>Marketing insights coming soon.</h2>

                                <p>
                                    We are preparing practical marketing ideas and
                                    strategies for Grolance.
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

export default Marketing;