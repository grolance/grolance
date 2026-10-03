import { Link } from "react-router-dom";

import SectionHeader from "../common/SectionHeader";
import ToolGrid from "../tools/ToolGrid";
import RevealOnScroll from "../common/RevealOnScroll";

import { tools } from "../../data/tools";

function Tools() {
    return (
        <section className="tools-section" id="tools">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="tools-heading">
                        <SectionHeader
                            kicker="GROLANCE TOOLS"
                            title="Useful tools for"
                            highlight="better decisions."
                            description="Simple business and AI-powered tools designed to help founders and entrepreneurs work smarter."
                        />

                        <Link
                            to="/tools"
                            className="section-link"
                        >
                            Explore tools
                            <span>↗</span>
                        </Link>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll threshold={0.08}>
                    <div className="tools-badge">
                        <span></span>
                        More tools coming
                    </div>
                </RevealOnScroll>

                <RevealOnScroll threshold={0.08}>
                    <ToolGrid tools={tools} />
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default Tools;