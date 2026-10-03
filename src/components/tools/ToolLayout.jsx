import { Link } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageContainer from "../layout/PageContainer";

function ToolLayout({
    title,
    description,
    category,
    children,
}) {
    return (
        <div className="app tool-layout">
            <Navbar />

            <main>
                <section className="tool-page-header">
                    <PageContainer>
                        <div className="tool-page-header-content">

                            {category && (
                                <span className="section-kicker">
                                    {category}
                                </span>
                            )}

                            <h1>{title}</h1>

                            {description && (
                                <p>{description}</p>
                            )}

                            <Link
                                to="/tools"
                                className="tool-back-link"
                            >
                                ← Back to tools
                            </Link>

                        </div>
                    </PageContainer>
                </section>

                <section className="tool-page-content">
                    <PageContainer>
                        {children}
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default ToolLayout;