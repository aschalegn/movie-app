import React, { useState } from 'react'
import './Search.css';
import { Redirect } from 'react-router-dom';
import { searchMovies } from '../../apis';

const Search = ({ searchTerm, setSearchTerm, searchForMovies }) => {
    const [isSearched, setIsSearched] = useState(false);

    const searchMovie = (e) => {
        e.preventDefault();
        searchForMovies();
        setIsSearched(true);
    }

    return (
        <div className="SearchBar">
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => {
                    setSearchTerm(e.target.value);
                }} />
            </form>
            {isSearched ?
                <Redirect to={`/search/${searchTerm}`} />
                : ''}
        </div>
    );
}

export default Search;
