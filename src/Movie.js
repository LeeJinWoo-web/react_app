import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
            </div>        
            <div className="Movie__Genres">
                {genres.map( (genre, index) => <MovieGenres genre={genre} key={index}/>)}
            </div>
            <p className="Movie__Synopsis">
                {synopsis}
            </p>
        </div>
    )

}

function MoviePoster({poster, alt}){
    return (
        <img alt={alt} title={alt} src={poster} className="Movie__Poster"/>
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie;