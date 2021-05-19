import React, { useState } from 'react'
import './Search.css';
import { Redirect } from 'react-router-dom';

const Search = (props) => {
    const [query, setQuery] = useState('');
    const [results, setresults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    let page = 1;

    const searchMovie = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/company?api_key=e63c75b1b6d500cd283f542e8e1ed2da&query=${query}&page=${page}`)
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setresults(data.results);
                setIsSearched(true);
                setIsSearched(false);
            });
    }

    return (
        <div className="SearchBar">
            <form onSubmit={searchMovie} inline>
                <input type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => {
                    setQuery(e.target.value);
                }} />
                {/* <button type="submit">Search</button> */}
            </form>

            {isSearched ? <Redirect to={{
                pathname: `/saerch/${query}`,
                state: { results: results }
            }} /> : ''}

        </div>
    )
}

export default Search;
