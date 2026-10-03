function ResourcePreview({ type }) {
    if (type === "TEMPLATE") {
        return (
            <div className="resource-preview resource-preview-sheet">
                <div className="preview-window-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="preview-sheet-content">
                    <div className="preview-sheet-toolbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="preview-sheet-title">
                        BUSINESS KPI TRACKER
                    </div>

                    <div className="preview-kpi-row">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="preview-chart">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                    <div className="preview-table">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "GUIDE") {
        return (
            <div className="resource-preview resource-preview-guide">
                <div className="preview-document">
                    <div className="preview-document-label">
                        GROLANCE
                    </div>

                    <div className="preview-document-title">
                        BUSINESS
                        <br />
                        GROWTH
                        <br />
                        GUIDE
                    </div>

                    <div className="preview-document-divider"></div>

                    <div className="preview-document-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="preview-document-number">
                        01
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="resource-preview resource-preview-checklist">
            <div className="preview-checklist">
                <div className="preview-checklist-brand">
                    GROLANCE
                </div>

                <div className="preview-checklist-heading">
                    BUSINESS DATA
                </div>

                <div className="preview-check-row">
                    <span className="check-mark">✓</span>
                    <i></i>
                </div>

                <div className="preview-check-row">
                    <span className="check-mark">✓</span>
                    <i></i>
                </div>

                <div className="preview-check-row">
                    <span className="check-mark">✓</span>
                    <i></i>
                </div>

                <div className="preview-check-row">
                    <span className="check-mark"></span>
                    <i></i>
                </div>

                <div className="preview-check-row">
                    <span className="check-mark"></span>
                    <i></i>
                </div>
            </div>
        </div>
    );
}

export default ResourcePreview;