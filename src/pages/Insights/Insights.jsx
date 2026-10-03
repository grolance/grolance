import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PageContainer from "../../components/layout/PageContainer";

import ArticleGrid from "../../components/articles/ArticleGrid";
import SectionHeader from "../../components/common/SectionHeader";
import RevealOnScroll from "../../components/common/RevealOnScroll";
import SEO from "../../components/common/SEO";

import { useArticles } from "../../hooks/useArticles";

function Insights() {
    const { articles } = useArticles();

    return (
        <div className="app">
            <SEO
                title="Insights"
                description="Business insights, startup stories, AI trends and practical ideas from Grolance."
            />

            <Navbar />

            <main>
                <section className="page-header">
                    <PageContainer>
                        <RevealOnScroll>
                            <SectionHeader
                                kicker="GROLANCE INSIGHTS"
                                title="Ideas worth"
                                highlight="knowing."
                                description="Business insights, startup stories, AI trends and practical ideas for people building what comes next."
                            />
                        </RevealOnScroll>
                    </PageContainer>
                </section>

                <section className="insights-page-content">
                    <PageContainer>
                        <RevealOnScroll threshold={0.08}>
                            <ArticleGrid articles={articles} />
                        </RevealOnScroll>
                    </PageContainer>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Insights;