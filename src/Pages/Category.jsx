import React, { useState, useEffect } from 'react';
import { getByCategory } from "../apis";
import { Link, useParams, useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import "./Category.css";
import Pagination from '../components/Pagination';

export default function Category() {
    const [movies, setMovies] = useState([]);
    const { id, category } = useParams();
    const [totalPages, setTotalPages] = useState(0);
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const [page, setPage] = useState(Number(searchParams.get("page")));

    useEffect(() => {
        page !== 0 ? getMovies(page) : getMovies(1);
    }, [id]);

    const getMovies = (nextPage) => {
        // searchParams.set("page", nextPage);
        // setPage(Number(searchParams.get("page")));
        var newurl =
            window.location.protocol + "//" +
            window.location.host +
            window.location.pathname +
            `?page=${nextPage}`;
        window.history.pushState({ path: newurl }, '', newurl);
        getByCategory(id, nextPage)
            .then(res => {
                const { movies, total } = res;
                setMovies(movies);
                setTotalPages(total);
            });
    };

    return (
        <>
            <h2 className='categoryName'>Category: {category}</h2>
            <section className="movieList">
                {movies.map(movie =>
                    <Link to={`/movie/${movie.id}`}
                        key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                )}
            </section>
            <Pagination
                totalPages={totalPages}
                getMovies={getMovies}
                page={page}
            />
        </>
    );
}
