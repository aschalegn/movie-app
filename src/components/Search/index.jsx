import React, { useState } from 'react'
import './Search.css';
import { Redirect } from 'react-router-dom';
import { searchMovies } from '../../apis';
import { useEffect } from 'react';

const Search = ({ searchTerm, setSearchTerm, searchForMovies }) => {
    const [isSearched, setIsSearched] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    const searchMovie = (e) => {
        searchForMovies();
        setIsSearched(true);
    }

    useEffect(() => {
        const tin = setInterval(() => {
            searchMovie(searchTerm);
        }, 500);

        return () => {
            clearInterval(tin)
        };
    }, [searchTerm]);

    return (
        <div className="SearchBar" >
            <form>
                <input type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </form>
        </div>
    );
}

export default Search;
