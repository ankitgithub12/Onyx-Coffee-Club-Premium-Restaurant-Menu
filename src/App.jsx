import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import ShortlistDrawer from './components/menu/ShortlistDrawer';

function App() {
  return (
    <MenuProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-bg-cream dark:bg-zinc-950 text-text-dark dark:text-zinc-100 transition-colors duration-300">
          
          {/* Sticky Navigation Bar */}
          <Navbar />
          
          {/* Main Content Router */}
          <main className="flex-grow">
            <AppRoutes />
          </main>

          {/* Shortlist Tray Bill Estimator */}
          <ShortlistDrawer />

          {/* Footer with branding */}
          <Footer />
          
        </div>
      </Router>
    </MenuProvider>
  );
}

export default App;
