import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { useArticlesByCategory } from "../../hooks/useArticles";

function Startups() {
    const { articles } = useArticlesByCategory("STARTUPS");

    return (
        <div className="app">
            <SEO
                title="Startups"
                description="Startup stories, founder lessons, business models and emerging opportunities from Grolance."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE · STARTUPS"
                            title="Ideas being"
                            highlight="built."
                            description="Startup stories, founder lessons, business models and emerging opportunities shaping the next generation of businesses."
                        />
                    </PageContainer>
                </section>

                <section className="category-page-content">
                    <PageContainer>
                        {articles.length > 0 ? (
                            <ArticleGrid articles={articles} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>Startup insights coming soon.</h2>
                                <p>
                                    We are preparing more startup stories and founder insights
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

export default Startups;