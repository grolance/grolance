import SectionHeader from "../common/SectionHeader";
import ResourceGrid from "../resources/ResourceGrid";
import RevealOnScroll from "../common/RevealOnScroll";

import { getFeaturedResources } from "../../services/resourceService";

function Resources() {
    const resources = getFeaturedResources();

    return (
        <section className="resources-section" id="resources">
            <div className="section-container">
                <RevealOnScroll>
                    <SectionHeader
                        kicker="FREE RESOURCES"
                        title="Resources to help you"
                        highlight="move faster."
                        description="Practical templates, guides and resources built for founders, entrepreneurs and growing businesses."
                        actionLabel="View resources"
                        onAction={() => {
                            window.location.href = "/resources";
                        }}
                    />
                </RevealOnScroll>

                <RevealOnScroll threshold={0.08}>
                    <ResourceGrid resources={resources} />
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default Resources;