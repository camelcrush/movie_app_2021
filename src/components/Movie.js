import React from 'react';
import { Link } from 'react-router-dom';
import ProbTypes from 'prop-types';
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div class="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}
            >
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genres, index) => (
                        <li key={index} className="genres_genre">{genres}</li>
                        ))}
                </ul>
                <p className="movie_summary">{summary.slice(0, 150)}...</p>
            </div>
        </Link>
    </div>
    );
}

Movie.ProbTypes = {
    id: ProbTypes.number.isRequired,
    year: ProbTypes.number.isRequired,
    title: ProbTypes.string.isRequired,
    summary: ProbTypes.string.isRequired,
    poster: ProbTypes.string.isRequired,
    genres: ProbTypes.arrayOf(ProbTypes.string).isRequired
};

export default Movie;