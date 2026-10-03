import { Link } from "react-router-dom";
import ResourcePreview from "./ResourcePreview";

function ResourceCard({ resource }) {
    if (!resource) {
        return null;
    }

    const resourcePath = resource.slug
        ? `/resources/${resource.slug}`
        : "/resources";

    return (
        <article className="resource-card">
            <div className="resource-card-top">
                <span className="resource-type">
                    {resource.type}
                </span>

                <span className="resource-format">
                    {resource.format}
                </span>
            </div>

            <Link
                to={resourcePath}
                className="resource-card-preview-button"
                aria-label={`View ${resource.title}`}
            >
                <ResourcePreview type={resource.type} />
            </Link>

            <div className="resource-card-content">
                <h3>
                    <Link to={resourcePath}>
                        {resource.title}
                    </Link>
                </h3>

                <p>{resource.description}</p>
            </div>

            <div className="resource-card-footer">
                <Link to={resourcePath}>
                    View resource
                    <span>↗</span>
                </Link>
            </div>
        </article>
    );
}

export default ResourceCard;