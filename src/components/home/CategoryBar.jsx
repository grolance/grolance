import { Link } from "react-router-dom";
import RevealOnScroll from "../common/RevealOnScroll";

function CategoryBar() {
    const categories = [
        { label: "All", path: "/insights" },
        { label: "Business", path: "/business" },
        { label: "Startups", path: "/startups" },
        { label: "AI & Tech", path: "/ai" },
        { label: "Marketing", path: "/marketing" },
        { label: "Finance", path: "/finance" },
        { label: "Growth", path: "/growth" },
    ];

    return (
        <section className="category-bar-section">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="category-bar">
                        <span className="category-label">EXPLORE</span>

                        <div className="category-list">
                            {categories.map((category, index) => (
                                <Link
                                    key={category.label}
                                    to={category.path}
                                    className={`category-link ${index === 0 ? "active" : ""
                                        }`}
                                >
                                    {category.label}
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/insights"
                            className="category-explore"
                        >
                            Explore
                            <span>→</span>
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}

export default CategoryBar;