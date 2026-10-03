import { Link } from "react-router-dom";
import RevealOnScroll from "../common/RevealOnScroll";

function FeaturedStory() {
    const articlePath = "/insights/ai-changing-modern-business";

    return (
        <section className="featured-story-section" id="ai">
            <div className="section-container">
                <RevealOnScroll>
                    <article className="featured-story">
                        <Link
                            to={articlePath}
                            className="featured-story-image-wrap"
                            aria-label="Read featured story"
                        >
                            <img
                                src="/images/featured-ai.jpg"
                                alt="AI and modern business analytics"
                                className="featured-story-image"
                            />
                        </Link>

                        <div className="featured-story-content">
                            <span className="featured-story-category">
                                AI &amp; BUSINESS
                            </span>

                            <h2>
                                AI is moving from experiment to business
                                infrastructure.
                            </h2>

                            <p>
                                Businesses are moving beyond AI experiments and
                                finding practical ways to use intelligent tools
                                across everyday operations, customer experience
                                and decision-making.
                            </p>

                            <div className="featured-story-meta">
                                <span>02 OCT 2026</span>
                                <span className="meta-dot">•</span>
                                <span>6 MIN READ</span>
                            </div>

                            <Link
                                to={articlePath}
                                className="featured-story-link"
                            >
                                Read the full story
                                <span>↗</span>
                            </Link>

                            <div className="featured-story-author">
                                <div className="author-avatar">G</div>

                                <div>
                                    <strong>Grolance Editorial</strong>
                                    <span>Business &amp; Technology</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default FeaturedStory;