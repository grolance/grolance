import { Link } from "react-router-dom";

function Hero() {
    const handleSectionNavigation = (target) => {
        const element = document.getElementById(target);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="hero-section" id="top">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-eyebrow">
                        GROLANCE · BUSINESS MEDIA
                    </span>

                    <h1 className="hero-title">
                        Business ideas
                        <br />
                        worth <span>knowing.</span>
                    </h1>

                    <p className="hero-description">
                        Business insights, startup stories, AI trends and growth ideas
                        for people building the future.
                    </p>

                    <div className="hero-actions">
                        <button
                            type="button"
                            className="hero-button hero-button-primary"
                            onClick={() => handleSectionNavigation("insights")}
                        >
                            Explore Insights
                            <span>→</span>
                        </button>

                        <Link
                            to="/resources"
                            className="hero-button hero-button-secondary"
                        >
                            Free Resources
                        </Link>
                    </div>

                    <div className="hero-meta">
                        <div className="hero-meta-item">
                            <strong>01</strong>
                            <span>Business Insights</span>
                        </div>

                        <div className="hero-meta-item">
                            <strong>02</strong>
                            <span>Startup Stories</span>
                        </div>

                        <div className="hero-meta-item">
                            <strong>03</strong>
                            <span>Growth Ideas</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-wrap">
                        <img
                            src="/images/hero-business.jpg"
                            alt="Business analytics workspace"
                            className="hero-image"
                        />
                    </div>

                    <article className="hero-story-card">
                        <span>TRENDING NOW</span>

                        <h3>
                            AI is becoming
                            <br />
                            business infrastructure.
                        </h3>

                        <Link to="/insights/ai-changing-modern-business">
                            Read the insight
                            <span>→</span>
                        </Link>
                    </article>

                    <div className="hero-visual-caption">
                        Ideas · Insights · Growth
                        <span> · Grolance</span>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <i></i>
            </div>
        </section>
    );
}

export default Hero;