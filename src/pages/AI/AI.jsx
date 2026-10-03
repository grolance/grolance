import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { useArticlesByCategory } from "../../hooks/useArticles";

function AI() {
    const { articles } = useArticlesByCategory("AI & TECH");

    return (
        <div className="app">
            <SEO
                title="AI & Tech"
                description="AI, technology and the tools changing how businesses work."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE · AI & TECH"
                            title="Technology changing"
                            highlight="business."
                            description="Explore AI trends, emerging technologies and practical tools shaping how modern businesses work."
                        />
                    </PageContainer>
                </section>

                <section className="category-page-content">
                    <PageContainer>
                        {articles.length > 0 ? (
                            <ArticleGrid articles={articles} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>AI & Tech insights coming soon.</h2>
                                <p>
                                    We are preparing more technology and AI stories for
                                    Grolance.
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

export default AI;