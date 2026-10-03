import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import SEO from "../../components/common/SEO";
import { categories } from "../../data/categories";

function CategoryList() {
    const handleNavigation = (path) => {
        window.history.pushState({}, "", path);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        window.dispatchEvent(
            new PopStateEvent("popstate")
        );
    };

    return (
        <div className="app">
            <SEO
                title="Categories"
                description="Explore Grolance categories covering business, startups, AI, marketing, finance and growth."
            />

            <Navbar />

            <main>
                <section className="page-hero">
                    <PageContainer>
                        <div className="page-hero-content">
                            <span className="section-kicker">
                                GROLANCE
                            </span>

                            <h1>
                                Explore by
                                <span> category.</span>
                            </h1>

                            <p>
                                Discover insights across the topics shaping
                                modern businesses and entrepreneurs.
                            </p>
                        </div>
                    </PageContainer>
                </section>

                <section className="category-list-section">
                    <PageContainer>
                        <div className="category-list-grid">
                            {categories.map((category) => (
                                <button
                                    type="button"
                                    className="category-list-card"
                                    key={category.id}
                                    onClick={() =>
                                        handleNavigation(
                                            `/${category.slug}`
                                        )
                                    }
                                >
                                    <span className="category-list-number">
                                        {String(
                                            categories.indexOf(category) + 1
                                        ).padStart(2, "0")}
                                    </span>

                                    <div>
                                        <h2>{category.name}</h2>

                                        <p>
                                            {category.description}
                                        </p>
                                    </div>

                                    <span className="category-list-arrow">
                                        ↗
                                    </span>
                                </button>
                            ))}
                        </div>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default CategoryList;