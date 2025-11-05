import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Loading } from "./components/ui/loading";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import AchievementBadgeGenerator from "./pages/AchievementBadgeGenerator";
import OfficeQuoteGenerator from "./pages/OfficeQuoteGenerator";
import WorkplaceComplimentGenerator from "./pages/WorkplaceComplimentGenerator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Security from "./pages/Security";
import Compliance from "./pages/Compliance";
// import BlogPage from "./pages/BlogPage";
// import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/achievement-badge-generator" element={<AchievementBadgeGenerator />} />
        <Route path="/office-quote-generator" element={<OfficeQuoteGenerator />} />
                <Route path="/compliment-generator" element={<WorkplaceComplimentGenerator />} />
                {/* Legal Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/security" element={<Security />} />
                <Route path="/compliance" element={<Compliance />} />
                {/* Blog routes commented out for now */}
                {/* <Route path="/blog" element={<BlogPage />} /> */}
                {/* <Route path="/blog/:id" element={<BlogDetailPage />} /> */}
                {/* Placeholder routes for other pages */}
                <Route path="/case-studies" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Case Studies Page - Coming Soon</h1></div>} />
                <Route path="/partners" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Partners Page - Coming Soon</h1></div>} />
                <Route path="/investors" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Investors Page - Coming Soon</h1></div>} />
                <Route path="/documentation" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Documentation Page - Coming Soon</h1></div>} />
                <Route path="/api" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">API Reference Page - Coming Soon</h1></div>} />
                <Route path="/downloads" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Downloads Page - Coming Soon</h1></div>} />
                <Route path="/support" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Support Center Page - Coming Soon</h1></div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
