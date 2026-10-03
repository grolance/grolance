import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";

import { useArticlesByCategory } from "../../hooks/useArticles";

function Finance() {
    const { articles } = useArticlesByCategory("FINANCE");

    return (
        <div className="app">
            <SEO
                title="Finance"
                description="Business finance, money management, metrics and financial decision-making from Grolance."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE · FINANCE"
                            title="Understand the"
                            highlight="numbers."
                            description="Explore business finance, money management, financial metrics and practical ideas for making better financial decisions."
                        />
                    </PageContainer>
                </section>

                <section className="category-page-content">
                    <PageContainer>
                        {articles.length > 0 ? (
                            <ArticleGrid articles={articles} />
                        ) : (
                            <div className="empty-page-message">
                                <h2>Finance insights coming soon.</h2>

                                <p>
                                    We are preparing practical finance insights for
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

export default Finance;