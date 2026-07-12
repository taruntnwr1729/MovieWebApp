import React, { useEffect, useState } from 'react';
import Search from './components/search.jsx';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

const App = () => {
  // Fixed: Removed the undefined 'initialState' variable
  const [searchTerm, setSearchTerm] = useState('');  
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // FIX 1: Cleaned up the invalid 'deps[]' syntax to a standard empty array

  useEffect(() => { 
    fetchMovies('');
  }, []);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setErrorMessage(''); // Clear previous error messages

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&query=${query}`;
      const response = await fetch(endpoint, API_OPTIONS);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // FIX: Cleaned up named arguments syntax & updated to check TMDB's structure
      if (data.success === false) {
        setErrorMessage(data.status_message || 'Failed to fetch movies');
        setMovies([]);
        return;
      }

      setMovies(data.results || []);

    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }; // FIX 2: Added this missing closing brace to close the fetchMovies function properly

  return (
    <main>
      <div className="pattern" />
      
      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        </header>

        <section className="content">
          <h2 className ="mt-[40px]">All Movies</h2>

          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <p className="text-white">{movie.title}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <h1 className="text-white text-3xl">Search Results</h1>
        <p className="text-white mt-5">{searchTerm}</p> 
      </div>
    </main>
  );
};

export default App;