function ArticleMeta({ date, readTime, author }) {
    const authorInitial = author?.name
        ? author.name.charAt(0).toUpperCase()
        : "";

    return (
        <div className="article-meta">
            <div className="article-meta-info">
                {date && (
                    <time className="article-meta-date">
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
                    <span className="article-meta-reading-time">
                        {readTime}
                    </span>
                )}
            </div>

            {author?.name && (
                <div className="article-meta-author">
                    <div
                        className="article-meta-avatar"
                        aria-hidden="true"
                    >
                        {author.avatar || authorInitial}
                    </div>

                    <div className="article-meta-author-details">
                        <strong>{author.name}</strong>

                        {author.role && (
                            <span>{author.role}</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArticleMeta;