function SectionHeader({
    kicker,
    title,
    highlight,
    description,
    actionLabel,
    onAction,
    className = "",
}) {
    const classes = [
        "section-header",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes}>
            <div className="section-header-content">
                {kicker && (
                    <span className="section-header-kicker">
                        {kicker}
                    </span>
                )}

                <h2 className="section-header-title">
                    {title}

                    {highlight && (
                        <>
                            {" "}
                            <span>{highlight}</span>
                        </>
                    )}
                </h2>

                {description && (
                    <p className="section-header-description">
                        {description}
                    </p>
                )}
            </div>

            {actionLabel && (
                <button
                    type="button"
                    className="section-header-action"
                    onClick={onAction}
                >
                    {actionLabel}
                    <span>↗</span>
                </button>
            )}
        </div>
    );
}

export default SectionHeader;