import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ movieList, setMovieList ] = useState( [] );

  useEffect( () => {

    fetch(`https://jsonmock.hackerrank.com/api/movies`)
      .then(response => response.json())
      .then(responseJson => {
        setMovieList(responseJson.data);
      })

  }, [] )

  function renderMovieList(listOfMovies) {

    return listOfMovies.map( activeMovie => {
      const { Title, Year, imdbID } = activeMovie;

      return (
        <div 
          key={imdbID}
          className='individual-movie'
        >
          <h2>{Title}</h2>
          <p>Released {Year}</p>
        </div>
      )
    })

  }

  return (

    <div className="App">
      <h1>Waterworlds</h1>
      {movieList[0] === undefined
        ? <div>Loading...</div>
        : renderMovieList(movieList)
      }
    </div>

  );

}

export default App;
