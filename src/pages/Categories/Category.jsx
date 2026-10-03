import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import SEO from "../../components/common/SEO";
import EmptyState from "../../components/common/EmptyState";

import { categories } from "../../data/categories";
import { useArticlesByCategory } from "../../hooks/useArticles";

function Category() {
    const { slug } = useParams();

    const category = categories.find(
        (item) => item.slug === slug
    );

    const { articles } = useArticlesByCategory(
        category?.name
    );

    if (!category) {
        return (
            <div className="app">
                <SEO
                    title="Category Not Found"
                    description="The Grolance category you are looking for could not be found."
                />

                <Navbar />

                <main>
                    <section className="category-not-found">
                        <PageContainer>
                            <EmptyState
                                title="Category not found"
                                description="This category does not exist or may have been moved."
                                actionLabel="View all categories"
                                onAction={() => {
                                    window.location.href = "/categories";
                                }}
                            />
                        </PageContainer>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    return (
        <div className="app">
            <SEO
                title={category.name}
                description={category.description}
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <SectionHeader
                            kicker="GROLANCE CATEGORY"
                            title={category.name}
                            description={category.description}
                        />
                    </PageContainer>
                </section>

                <section className="category-page-content">
                    <PageContainer>
                        {articles.length > 0 ? (
                            <ArticleGrid articles={articles} />
                        ) : (
                            <EmptyState
                                title="No insights yet"
                                description={`There are no ${category.name.toLowerCase()} insights published yet.`}
                                actionLabel="Browse all insights"
                                onAction={() => {
                                    window.location.href = "/insights";
                                }}
                            />
                        )}

                        <div className="category-back-link">
                            <Link to="/categories">
                                ← Browse all categories
                            </Link>
                        </div>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Category;