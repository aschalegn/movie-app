import React, { useState, useEffect } from 'react';
import { getPopulars } from "../../apis";
import * as style from "./TopSlider.module.css";

export default function TopSlider() {
    const [populars, setPopulars] = useState([]);
    const [currentId, setCurrentId] = useState(0)
    const [movie, setMovie] = useState(populars[currentId]);
    
    useEffect(() => {
        getPopulars().then(res => {
            const pop = [];
            for (let i = 0; i < 10; i++) {
                pop.push(res[i]);
            }
            setPopulars(pop);
            setMovie(pop[0]);
        });
    }, []);

    const next = () => {
        let i = currentId;
        if (i + 1 <= populars.length) setCurrentId(i + 1)
        else setCurrentId(0);
        setMovie(populars[currentId]);
    };

    const prev = () => {
        let i = currentId;
        if (currentId - 1 >= 0) setCurrentId(i - 1);
        else setCurrentId(10);
        setMovie(populars[currentId]);
    };

    return (
        <section className={style.TopSlider}>
            <article className={style.controllers}>
                <span className={style.right} onClick={next}>&#10097;</span>
                <span className={style.left} onClick={prev}>&#10096;</span>
            </article>
            {movie ?
                <article className={style.movieCard}>
                    <h2 className={style.title}>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt="" />
                    <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="" />
                </article>
                : ''}
        </section>
    )
}
