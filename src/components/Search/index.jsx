import React, { useState } from 'react'
import './Search.css';
import { Redirect } from 'react-router-dom';
// import { searchMovies } from '../../apis';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [term, setTerm] = useState('');
    const location = useLocation();
    const searchMovie = (e) => {
        setIsSearched(true);
    }

    useEffect(() => {
        console.log(term);
        var newurl =
            window.location.protocol + "//" +
            window.location.host +
            window.location.pathname + `?query=${term}`;
            
        window.history.replaceState({ path: newurl }, "", newurl);
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get("query");
        console.log(query);
        // search
        // window.history.pushState({ path: newurl }, '', newurl);

    }, [term]);

    return (
        <div className="SearchBar"
            style={{ color: "black" }}
        >
            <input type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => {
                    setTerm(e.target.value);
                }}
            />
            <button type="button" onClick={searchMovie}>Search</button>
            {/* {isSearched ? <Redirect to={`search/${term}`} /> : ""} */}
        </div>
    );
}

export default Search;
