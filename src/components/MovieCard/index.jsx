import React from 'react';

export default function MovieCard({ movie }) {
    return (
        <article className="movieCard">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
            <h5 className="title"><center> {movie.title}</center></h5>
            <p className="rate">{movie.vote_average}/10 <span className="stars">&#9734;</span></p>
        </article>
    )
}
