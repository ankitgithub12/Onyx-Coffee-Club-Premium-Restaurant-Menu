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
        <div className="min-h-screen flex flex-col" style={{ background: '#fffbf4', color: '#1c1917' }}>

          {/* Sticky Navigation Bar */}
          <Navbar />

          {/* Main Content Router */}
          <main className="flex-grow">
            <AppRoutes />
          </main>

          {/* Shortlist Tray Bill Estimator */}
          <ShortlistDrawer />

          {/* Footer */}
          <Footer />

        </div>
      </Router>
    </MenuProvider>
  );
}

export default App;
