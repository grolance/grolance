import { Link } from "react-router-dom";

function ArticleCard({ article }) {
    if (!article) {
        return null;
    }

    const articlePath = article.slug
        ? `/insights/${article.slug}`
        : "/insights";

    return (
        <article className="article-card">
            <Link
                to={articlePath}
                className="article-card-image-link"
                aria-label={`Read ${article.title}`}
            >
                <div className="article-card-image-wrap">
                    {article.image && (
                        <img
                            src={article.image}
                            alt={article.title || "Grolance article"}
                            className="article-card-image"
                            loading="lazy"
                        />
                    )}

                    {article.category && (
                        <span className="article-card-category">
                            {article.category}
                        </span>
                    )}
                </div>
            </Link>

            <div className="article-card-content">
                <div className="article-card-meta">
                    {article.date && (
                        <time>{article.date}</time>
                    )}

                    {article.date && article.readTime && (
                        <span
                            className="meta-dot"
                            aria-hidden="true"
                        >
                            •
                        </span>
                    )}

                    {article.readTime && (
                        <span>{article.readTime}</span>
                    )}
                </div>

                {article.title && (
                    <h3 className="article-card-title">
                        <Link to={articlePath}>
                            {article.title}
                        </Link>
                    </h3>
                )}

                {article.excerpt && (
                    <p className="article-card-excerpt">
                        {article.excerpt}
                    </p>
                )}

                <Link
                    to={articlePath}
                    className="article-card-link"
                    aria-label={`Read story: ${article.title}`}
                >
                    Read story
                    <span aria-hidden="true">↗</span>
                </Link>
            </div>
        </article>
    );
}

export default ArticleCard;