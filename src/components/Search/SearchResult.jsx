import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieCard from "../Category/MovieCard";
import Pagination from '../Pagination';

const SearchResult = ({ page, setPage, searchResult, searchTerm, setSearchTerm }) => {
    const { query } = useParams();
    console.log(query);
    useEffect(() => {
        setSearchTerm(query);
    }, []);
    return (
        <>
            <h3><center>Search result for -  {searchTerm}</center> </h3>
            <div className="searchResultContainer">
                {searchResult.map(movie =>
                    <Link to={`/movie/${movie.id}`} key={movie.id}> <MovieCard movie={movie} /></Link>
                )}
            </div>
            <Pagination page={page} setPage={setPage} />
        </>
    )
}

export default SearchResult;
