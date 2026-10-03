import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/home/Hero";
import FeaturedStory from "../../components/home/FeaturedStory";
import CategoryBar from "../../components/home/CategoryBar";
import LatestInsights from "../../components/home/LatestInsights";
import Trending from "../../components/home/Trending";
import Resources from "../../components/home/Resources";
import Tools from "../../components/home/Tools";
import Newsletter from "../../components/home/Newsletter";

function Home() {
    return (
        <div className="app">
            <Navbar />

            <main>
                <Hero />
                <FeaturedStory />
                <CategoryBar />
                <LatestInsights />
                <Trending />
                <Resources />
                <Tools />
                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}

export default Home;