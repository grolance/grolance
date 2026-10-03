function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    onClick,
    disabled = false,
    ...props
}) {
    const classes = [
        "ui-button",
        `ui-button-${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;