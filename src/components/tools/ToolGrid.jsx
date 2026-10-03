import ToolCard from "./ToolCard";

function ToolGrid({ tools = [], className = "" }) {
    const classes = [
        "tool-grid",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (!tools.length) {
        return null;
    }

    return (
        <div className={classes}>
            {tools.map((tool) => (
                <ToolCard
                    key={tool.id}
                    tool={tool}
                />
            ))}
        </div>
    );
}

export default ToolGrid;