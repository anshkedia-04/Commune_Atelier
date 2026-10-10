import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InterestModalProvider } from './context/InterestModalContext';
import { ChatbotProvider } from './context/ChatbotContext';
import { ToastProvider } from './context/ToastContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { InterestModal } from './components/InterestModal/InterestModal';
import { AIChatbot } from './components/AIChatbot/AIChatbot';

// Pages
import { Home } from './pages/Home/Home';
import { Collections } from './pages/Collections/Collections';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { About } from './pages/About/About';
import { Customization } from './pages/Customization/Customization';
import { Contact } from './pages/Contact/Contact';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <InterestModalProvider>
          <ChatbotProvider>
            <ScrollToTop />
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/product/:slug" element={<ProductDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/customization" element={<Customization />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <InterestModal />
              <AIChatbot />
            </div>
          </ChatbotProvider>
        </InterestModalProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
