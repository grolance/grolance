function ArticleHeader({
    category,
    title,
    excerpt,
    date,
    readTime,
    author,
}) {
    return (
        <header className="article-header">
            {category && (
                <span className="article-header-category">
                    {category}
                </span>
            )}

            <h1 className="article-header-title">
                {title}
            </h1>

            {excerpt && (
                <p className="article-header-excerpt">
                    {excerpt}
                </p>
            )}

            <div className="article-header-meta">
                {date && (
                    <time className="article-header-date">
                        {date}
                    </time>
                )}

                {date && readTime && (
                    <span
                        className="meta-dot"
                        aria-hidden="true"
                    >
                        •
                    </span>
                )}

                {readTime && (
                    <span className="article-header-read-time">
                        {readTime}
                    </span>
                )}

                {author?.name && (
                    <>
                        <span
                            className="meta-dot"
                            aria-hidden="true"
                        >
                            •
                        </span>

                        <span className="article-header-author">
                            By {author.name}
                        </span>
                    </>
                )}
            </div>
        </header>
    );
}

export default ArticleHeader;