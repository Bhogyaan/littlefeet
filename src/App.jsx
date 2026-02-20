import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { WhyUsPage } from './pages/WhyUsPage';
import { AboutPage } from './pages/AboutPage';
import { EnrollPage } from './pages/EnrollPage';
import { GalleryPage } from './pages/GalleryPage';
import { FAQPage } from './pages/FAQPage';
import { EventsPage } from './pages/EventsPage';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';
import { AnimatePresence } from 'framer-motion';

function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-fantasy-purple selection:text-white overflow-x-hidden relative">
        <Navbar />
        <ScrollToTopButton />

        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/enroll" element={<EnrollPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/events" element={<EventsPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
