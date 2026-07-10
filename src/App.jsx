import React from 'react';

const App = () => {
  return (
    <main>
      {/* This renders your background texture across the entire screen */}
      <div className="pattern" />
      
      <div className="wrapper">
        
        <header>
          {/* Change this path to your actual logo/banner image file located in your public folder */}
      
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle
          </h1>
        </header>
        <search />
        <p className="text-white mt-5">Search</p>
      </div>
    </main>
  );
};

export default App;