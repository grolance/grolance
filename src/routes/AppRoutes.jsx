import { BrowserRouter, Routes, Route } from "react-router-dom";

import CookieConsent from "../components/common/CookieConsent";

import ScrollToTop from "../components/common/ScrollToTop";

import Home from "../pages/Home/Home";
import Insights from "../pages/Insights/Insights";
import Article from "../pages/Insights/Article";
import Category from "../pages/Categories/Category";
import CategoryList from "../pages/Categories/CategoryList";
import Startups from "../pages/Startups/Startups";
import AI from "../pages/AI/AI";
import Business from "../pages/Business/Business";
import Marketing from "../pages/Marketing/Marketing";
import Finance from "../pages/Finance/Finance";
import Growth from "../pages/Growth/Growth";
import Resources from "../pages/Resources/Resources";
import Resource from "../pages/Resources/Resource";
import Tools from "../pages/Tools/Tools";
import AIIdeaGenerator from "../pages/Tools/AIIdeaGenerator";
import ProfitMarginCalculator from "../pages/Tools/ProfitMarginCalculator";
import BusinessGrowthCalculator from "../pages/Tools/BusinessGrowthCalculator";
import Search from "../pages/Search/Search";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Advertise from "../pages/Advertise/Advertise";
import Privacy from "../pages/Legal/Privacy";
import Terms from "../pages/Legal/Terms";
import Cookies from "../pages/Legal/Cookies";

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <CookieConsent />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<Article />} />

                <Route path="/categories" element={<CategoryList />} />
                <Route path="/categories/:slug" element={<Category />} />

                <Route path="/startups" element={<Startups />} />
                <Route path="/ai" element={<AI />} />
                <Route path="/business" element={<Business />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/growth" element={<Growth />} />

                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/:slug" element={<Resource />} />

                <Route path="/tools" element={<Tools />} />
                <Route
                    path="/tools/ai-business-idea-generator"
                    element={<AIIdeaGenerator />}
                />
                <Route
                    path="/tools/profit-margin-calculator"
                    element={<ProfitMarginCalculator />}
                />
                <Route
                    path="/tools/business-growth-calculator"
                    element={<BusinessGrowthCalculator />}
                />

                <Route path="/search" element={<Search />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/advertise" element={<Advertise />} />

                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;