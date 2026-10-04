import { Link, useNavigate } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const handleNewsletter = () => {
        navigate("/");

        setTimeout(() => {
            const newsletter = document.getElementById("newsletter");

            if (newsletter) {
                newsletter.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    };

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        Grolance
                    </Link>

                    <p>
                        Business ideas, insights and resources for people
                        building what comes next.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>EXPLORE</h4>

                    <Link to="/insights">Insights</Link>
                    <Link to="/ai">AI &amp; Tech</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/tools">Tools</Link>
                </div>

                <div className="footer-column">
                    <h4>RESOURCES</h4>

                    <Link to="/resources">Free Resources</Link>
                    <Link to="/tools">Business Tools</Link>

                    <button
                        type="button"
                        onClick={handleNewsletter}
                    >
                        Newsletter
                    </button>
                </div>

                <div className="footer-column">
                    <h4>COMPANY</h4>

                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/advertise">Advertise</Link>
                </div>

                <div className="footer-column">
                    <h4>CONNECT</h4>

                    <a
                        href="https://www.instagram.com/grolance_"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {currentYear} Grolance. All rights reserved.
                </p>

                <div className="footer-legal">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/cookies">Cookies</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;