import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getByCategory } from "../../apis";
import * as style from "./Category.module.css";
import MovieCard from './MovieCard';

export default function Category({ id, category }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getByCategory(id)
            .then(res => setMovies(res.movies));
    }, []);
    const sliderRef = useRef();
    
    const prev = () => {
        const slider = sliderRef.current;
        slider.scrollLeft -= slider.offsetWidth;
    };

    const next = () => {
        const slider = sliderRef.current;
        slider.scrollLeft += slider.offsetWidth;
    };

    return (
        <div className={style.categories}>
            <h2 className=""><Link to={`category/${category}/${id}`}>{category}</Link></h2>
            {movies.length > 0 ?
                <div className={style.sliderContainer}>
                    <span className={style.prev} onClick={prev}>&#10096;</span>
                    <span className={style.next} onClick={next}> &#10097;</span>
                    <section className={style.CategorySlide} ref={sliderRef}>
                        {movies.map(movie =>
                            <Link to={`/movie/${movie.id}`} key={movie.id}> <MovieCard movie={movie} /></Link>
                        )}
                    </section>
                </div> : ""}
        </div>
    )
}
