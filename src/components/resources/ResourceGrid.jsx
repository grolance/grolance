import ResourceCard from "./ResourceCard";

function ResourceGrid({ resources = [], className = "" }) {
    const classes = [
        "resource-grid",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (!resources.length) {
        return null;
    }

    return (
        <div className={classes}>
            {resources.map((resource) => (
                <ResourceCard
                    key={resource.id}
                    resource={resource}
                />
            ))}
        </div>
    );
}

export default ResourceGrid;