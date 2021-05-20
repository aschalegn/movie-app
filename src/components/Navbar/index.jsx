import React, { useState, useEffect } from 'react';
import * as style from './NavBar.module.css';
import { Link, useParams } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import Search from '../Search';

export default function NavBarComp({ search, setSearch, searchTerm, setSearchTerm, searchForMovies }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={style.NavBar}>
        <ul className={style.mainNav}>
          <li>
            <button onClick={() => setOpen(!open)} className={style.openBtn}>Categries</button>
            <Link to="/" className={style.link}>Netflix Clone</Link>
          </li>
          {search ? "" : ""}
          <Search
            search={search}
            setSearch={setSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchForMovies={searchForMovies}
          />
        </ul>
        <ul>
          {open ? <SideNavBar setOpen={setOpen} open={open} /> : ''}
        </ul>
      </nav>
    </>
  );
}
