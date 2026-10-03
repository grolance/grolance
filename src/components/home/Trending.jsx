import { useNavigate } from "react-router-dom";

import SectionHeader from "../common/SectionHeader";
import RevealOnScroll from "../common/RevealOnScroll";
import { useArticles } from "../../hooks/useArticles";

function Trending() {
    const { articles } = useArticles();
    const navigate = useNavigate();

    const trendingArticles = articles.slice(0, 4);

    const handleArticleClick = (slug) => {
        if (!slug) return;

        navigate(`/insights/${slug}`);
    };

    return (
        <section className="trending-section">
            <div className="section-container">
                <RevealOnScroll>
                    <SectionHeader
                        kicker="TRENDING"
                        title="What people are"
                        highlight="reading."
                    />
                </RevealOnScroll>

                <RevealOnScroll threshold={0.08}>
                    <div className="trending-list">
                        {trendingArticles.map((article, index) => (
                            <article
                                className="trending-item"
                                key={article.id}
                            >
                                <span className="trending-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="trending-content">
                                    <span className="trending-category">
                                        {article.category}
                                    </span>

                                    <h3>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleArticleClick(article.slug)
                                            }
                                        >
                                            {article.title}
                                        </button>
                                    </h3>

                                    <span className="trending-meta">
                                        {article.readTime}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="trending-arrow"
                                    onClick={() =>
                                        handleArticleClick(article.slug)
                                    }
                                    aria-label={`Read ${article.title}`}
                                >
                                    ↗
                                </button>
                            </article>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default Trending;