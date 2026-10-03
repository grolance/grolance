import ArticleGrid from "../articles/ArticleGrid";
import SectionHeader from "../common/SectionHeader";
import RevealOnScroll from "../common/RevealOnScroll";

import { useArticles } from "../../hooks/useArticles";
import { useNavigate } from "react-router-dom";

function LatestInsights() {
    const { articles } = useArticles();
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate("/insights");
    };

    return (
        <section className="latest-insights-section" id="insights">
            <div className="section-container">
                <RevealOnScroll>
                    <SectionHeader
                        kicker="LATEST INSIGHTS"
                        title="Ideas worth"
                        highlight="your attention."
                        actionLabel="Explore all"
                        onAction={handleExplore}
                    />
                </RevealOnScroll>

                <RevealOnScroll threshold={0.08}>
                    <ArticleGrid articles={articles} />
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default LatestInsights;