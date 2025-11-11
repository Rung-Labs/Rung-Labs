import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { GL } from "./components/gl";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import { useState } from "react";

function AppContent() {
  const [hovering, setHovering] = useState(false);
  useLocation();

  return (
    <div className="h-screen bg-background text-foreground relative overflow-hidden max-md:overflow-y-auto max-md:min-h-screen max-md:h-auto">
      {/* Persistent Background Animation */}
      <GL hovering={hovering} />
      
      {/* Page Content - relative z-index keeps it above background */}
      <div className="relative z-10 h-full">
        <Header />
        {/* Spacer for fixed header */}
        <div className="h-24" />
        <Routes>
          <Route 
            path="/" 
            element={<Home setHovering={setHovering} />} 
          />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  );
}

export default App;

