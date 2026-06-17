import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { NavigationProvider } from './context/NavigationContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './components/LandingPage';
import DocumentationHub from './components/DocumentationHub';
import InstructorPage from './components/InstructorPage';
import './App.css';

function Layout({ children }) {
  const { lang } = useLanguage();

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased ${
        lang === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      <Header />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/docs" element={<DocumentationHub />} />
                <Route path="/instructor" element={<InstructorPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </NavigationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
