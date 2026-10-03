import ArticleCard from "./ArticleCard";

function ArticleGrid({
    articles = [],
    className = "",
}) {
    const safeArticles = Array.isArray(articles)
        ? articles.filter(Boolean)
        : [];

    const classes = ["article-grid", className]
        .filter(Boolean)
        .join(" ");

    if (!safeArticles.length) {
        return null;
    }

    return (
        <div className={classes}>
            {safeArticles.map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    );
}

export default ArticleGrid;