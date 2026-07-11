import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        {/* Fixed: Properly formatted self-closing image tag */}
        <img src="/search.svg" alt="search" />
        
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="search-results">
        {/* Render search results here */}
      </div>
    </div>
  );
};

export default Search;