import { useState, useEffect } from 'react';

const MoviesToo = () => {

    const [ moviesList, setMoviesList ] = useState( [] );

    useEffect( () => {
        fetch(`http://localhost:8000/api/movies`)
            .then(response => response.json())
            .then(responseJson => {
                setMoviesList(responseJson);
            })
    }, [] );

    const renderMovieItem = (movieData) => {

        const { Title, Year, imdbID } = movieData;

        return (
            <div 
                key={imdbID}
                className='individual-movie'
            >
                {Title} ({Year})
            </div>
        )
    }

    const renderMoviesList = (moviesData) => {
        return (
            <div>
                {moviesData.map(renderMovieItem)}
            </div>
        )
    }

    return (
        <div className='content-container'>
            <h2>More movies!</h2>
            {!moviesList[0]
                ? <p>Loading...</p>
                : renderMoviesList(moviesList)
            }
        </div>
    )

}

export default MoviesToo;