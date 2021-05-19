import React from 'react';
import * as style from "./Category.module.css";
export default function MovieCard({ movie }) {
    return (
        <article  className={style.movieCard}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
            <p>{movie.title}</p>
        </article>
    )
}
