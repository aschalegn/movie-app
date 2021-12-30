import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import MovieCard from "../Category/MovieCard";
import Pagination from '../Pagination';

const SearchResult = ({ page, setPage, searchResult, searchTerm }) => {
    const [result, setresult] = useState([]);
    const { search } = useLocation();
    // const [searchParams] = useSearchParams();
    const { query } = useParams()
    // const searchParams = new URLSearchParams(search);
    // const [term, setTerm] = useState(searchParams.get("query") | "");

    useEffect(() => {
        console.log("kjhg");
    }, [query]);

    return (
        <>
            <h3><center>Search result for -  {query}</center> </h3>
            <div className="searchResultContainer">
                {result.map(movie =>
                    <Link to={`/movie/${movie.id}`} key={movie.id}> <MovieCard movie={movie} /></Link>
                )}
            </div>
            <Pagination page={page} setPage={setPage} />
        </>
    );
}

export default SearchResult;
