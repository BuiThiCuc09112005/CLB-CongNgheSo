// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main'; // Import Main component
import Footer from './Components/Footer';

function App() {
  const [activeMenu, setActiveMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    console.log('Menu clicked:', menu); // Log menu click for debugging
    setActiveMenu(menu);
  };

  return (
    <div className="App">
      <Header activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <Main activeMenu={activeMenu} setActiveMenu={setActiveMenu} /> {/* Pass setActiveMenu to Main */}
      <Footer />
    </div>
  );
}

export default App;
