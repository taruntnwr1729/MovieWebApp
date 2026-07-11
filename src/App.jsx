import React, { useState } from 'react';
import Search from './components/search.jsx';

const App = () => {
  // Fixed: Removed the undefined 'initialState' variable
  const [searchTerm, setSearchTerm] = useState('');  

  return (
    <main>
      <div className="pattern" />
      
      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle
          </h1>
        </header>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h1 className="text-white text-3xl">Search Results</h1>
        <p className="text-white mt-5">{searchTerm}</p> 
      </div>
    </main>
  );
};

export default App;