function ArticleContent({ content = [] }) {
    if (!Array.isArray(content) || content.length === 0) {
        return null;
    }

    return (
        <div className="article-content">
            {content.map((block, index) => {
                if (!block || !block.type) {
                    return null;
                }

                switch (block.type) {
                    case "heading":
                        return (
                            <h2 key={index}>
                                {block.text}
                            </h2>
                        );

                    case "paragraph":
                        return (
                            <p key={index}>
                                {block.text}
                            </p>
                        );

                    case "quote":
                        return (
                            <blockquote key={index}>
                                <p>{block.text}</p>
                            </blockquote>
                        );

                    case "list":
                        if (!Array.isArray(block.items)) {
                            return null;
                        }

                        return (
                            <ul key={index}>
                                {block.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );

                    case "image":
                        if (!block.src) {
                            return null;
                        }

                        return (
                            <figure key={index}>
                                <img
                                    src={block.src}
                                    alt={block.alt || "Grolance article image"}
                                    loading="lazy"
                                />

                                {block.caption && (
                                    <figcaption>
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default ArticleContent;