import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
            </div>        
            <div className="Movie_Genres">
                {genres.map( (genre, index) => <MovieGenres genre={genre} key={index}/>)}
            </div>
            <p className="Movie_Synopsis">
                {synopsis}
            </p>
        </div>
    )

}

function MoviePoster({poster}){
    return (
        <img alt="" src={poster} />
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie;