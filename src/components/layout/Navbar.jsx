import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: "Insights", path: "/insights" },
        { label: "AI & Tech", path: "/ai" },
        { label: "Resources", path: "/resources" },
        { label: "Tools", path: "/tools" },
    ];

    const handleNavigation = (path) => {
        setMenuOpen(false);
        navigate(path);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleLogoClick = () => {
        setMenuOpen(false);
        navigate("/");

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    const isActive = (path) => {
        if (path === "/insights") {
            return (
                location.pathname === "/insights" ||
                location.pathname.startsWith("/insights/")
            );
        }

        return location.pathname === path;
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <button
                    type="button"
                    className="navbar-logo"
                    onClick={handleLogoClick}
                    aria-label="Go to Grolance home"
                >
                    Grolance
                </button>

                <nav
                    className="navbar-links"
                    aria-label="Main navigation"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={isActive(item.path) ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="navbar-actions">
                    <button
                        type="button"
                        className="navbar-search"
                        aria-label="Search Grolance"
                        onClick={() => handleNavigation("/search")}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="6.5" />
                            <path d="M16 16L21 21" />
                        </svg>
                    </button>

                    <span
                        className="navbar-divider"
                        aria-hidden="true"
                    ></span>

                    <button
                        type="button"
                        className="navbar-follow"
                        onClick={() => handleNavigation("/")}
                    >
                        Home
                    </button>
                </div>

                <button
                    type="button"
                    className={`navbar-menu ${menuOpen ? "is-open" : ""
                        }`}
                    onClick={() => setMenuOpen((value) => !value)}
                    aria-label={
                        menuOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    <span></span>
                    <span></span>
                </button>
            </div>

            {menuOpen && (
                <nav
                    id="mobile-navigation"
                    className="mobile-nav"
                    aria-label="Mobile navigation"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={
                                isActive(item.path) ? "active" : ""
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <button
                        type="button"
                        className={
                            location.pathname === "/" ? "active" : ""
                        }
                        onClick={() => handleNavigation("/")}
                    >
                        Home
                    </button>

                    <button
                        type="button"
                        className={
                            location.pathname === "/search"
                                ? "active"
                                : ""
                        }
                        onClick={() => handleNavigation("/search")}
                    >
                        Search
                    </button>
                </nav>
            )}
        </header>
    );
}

export default Navbar;