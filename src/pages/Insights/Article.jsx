import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ArticleHeader from "../../components/articles/ArticleHeader";
import ArticleContent from "../../components/articles/ArticleContent";
import ArticleMeta from "../../components/articles/ArticleMeta";
import ArticleShare from "../../components/articles/ArticleShare";
import RelatedArticles from "../../components/articles/RelatedArticles";
import ReadingProgress from "../../components/articles/ReadingProgress";

import SEO from "../../components/common/SEO";
import EmptyState from "../../components/common/EmptyState";

import { useArticle, useArticles } from "../../hooks/useArticles";

function Article() {
    const { slug } = useParams();

    const { article, found } = useArticle(slug);
    const { articles } = useArticles();

    if (!found) {
        return (
            <div className="app">
                <SEO
                    title="Article Not Found"
                    description="The Grolance article you are looking for could not be found."
                />

                <Navbar />

                <main>
                    <section className="article-not-found">
                        <div className="section-container">
                            <EmptyState
                                title="Article not found"
                                description="The article may have been moved or is no longer available."
                                actionLabel="Back to insights"
                                onAction={() => {
                                    window.location.href = "/insights";
                                }}
                            />
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    const articleUrl =
        typeof window !== "undefined"
            ? window.location.href
            : "";

    return (
        <div className="app article-page">
            <ReadingProgress />

            <SEO
                title={article.title}
                description={article.excerpt}
                image={article.image}
                url={articleUrl}
            />

            <Navbar />

            <main>
                <article>
                    <section className="article-page-header">
                        <div className="section-container">
                            <ArticleHeader
                                category={article.category}
                                title={article.title}
                                excerpt={article.excerpt}
                                date={article.date}
                                readTime={article.readTime}
                                author={article.author}
                            />

                            <ArticleMeta
                                date={article.date}
                                readTime={article.readTime}
                                author={article.author}
                            />
                        </div>
                    </section>

                    <section className="article-featured-image-section">
                        <div className="section-container">
                            <div className="article-featured-image-wrap">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="article-featured-image"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="article-body-section">
                        <div className="section-container">
                            <div className="article-layout">
                                <aside className="article-sidebar">
                                    <Link to="/insights">
                                        ← All insights
                                    </Link>

                                    <ArticleShare
                                        title={article.title}
                                        url={articleUrl}
                                    />
                                </aside>

                                <div className="article-main-content">
                                    <ArticleContent
                                        content={article.content}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="article-related-section">
                        <div className="section-container">
                            <RelatedArticles
                                articles={articles}
                                currentArticleId={article.id}
                            />
                        </div>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}

export default Article;