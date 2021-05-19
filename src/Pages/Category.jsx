import React, { useState, useEffect, useRef } from 'react';
import { getByCategory } from "../apis";
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import "./Category.css";
import Pagination from '../components/Pagination';

export default function Category() {
    const [movies, setMovies] = useState([]);
    const { id, category } = useParams();
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getMovies();
    }, [id]);

    const getMovies = (page = 1) => {
        getByCategory(id, page).then(res => {
            const { movies, total } = res;
            setMovies(movies);
            setTotalPages(total);
        });
    };

    return (
        <div>
            <center><h2>Category: {category}</h2></center>
            <section className="movieList">
                {movies.map(movie =>
                    <Link to={`/movie/${movie.id}`} key={movie.id}><MovieCard movie={movie} /></Link>
                )}
            </section>
            <Pagination
                totalPages={totalPages}
                getMovies={getMovies}
            />
        </div>
    );
}
