import React from 'react';
import MovieCard from "../Category/MovieCard";

const SearchResult = props => {
    return (
        <div>
            {props.location.state.results.map(movie =>
                <MovieCard movie={movie} />
            )}
            {/* <Pagination /> */}
        </div>
    )
}

export default SearchResult;
