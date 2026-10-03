import { Link } from "react-router-dom";
import ToolVisual from "./ToolVisual";

function ToolCard({ tool }) {
    if (!tool) {
        return null;
    }

    const toolPath = tool.path || "/tools";
    const isAvailable = Boolean(tool.path);

    return (
        <article className="tool-card">
            <div className="tool-card-top">
                <span className="tool-category">
                    {tool.category}
                </span>

                <span
                    className={`tool-status ${isAvailable
                            ? "tool-status-available"
                            : "tool-status-coming"
                        }`}
                >
                    {isAvailable ? "AVAILABLE" : tool.status}
                </span>
            </div>

            <Link
                to={toolPath}
                className="tool-card-visual-button"
                aria-label={`Explore ${tool.title}`}
            >
                <ToolVisual type={tool.icon} />
            </Link>

            <div className="tool-card-content">
                <h3>
                    <Link to={toolPath}>
                        {tool.title}
                    </Link>
                </h3>

                <p>{tool.description}</p>
            </div>

            <div className="tool-card-footer">
                <Link to={toolPath}>
                    <span>Explore tool</span>
                    <span className="tool-card-arrow">→</span>
                </Link>
            </div>
        </article>
    );
}

export default ToolCard;