function EmptyState({
    title = "Nothing found",
    description = "There is nothing to display here yet.",
    actionLabel,
    onAction,
}) {
    return (
        <div className="empty-state">
            <div className="empty-state-icon" aria-hidden="true">
                —
            </div>

            <h3 className="empty-state-title">
                {title}
            </h3>

            <p className="empty-state-description">
                {description}
            </p>

            {actionLabel && (
                <button
                    type="button"
                    className="empty-state-action"
                    onClick={onAction}
                >
                    {actionLabel}
                    <span>→</span>
                </button>
            )}
        </div>
    );
}

export default EmptyState;