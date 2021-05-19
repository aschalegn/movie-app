import React, { useState } from 'react';
import * as style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import Search from '../Search';

export default function NavBarComp({ search, setSearch, searchTerm, setSearchTerm }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={style.NavBar}>
        <ul className={style.mainNav}>
          <li>
            <button onClick={() => setOpen(!open)} className={style.openBtn}>Categries</button>
            <Link to="/" className={style.link}>Netflix Clone</Link>
          </li>
          {/* <li className="searchBtn" onClick={() => setSearch(!search)}> Search </li> */}
          {search ? "" : ""}
          <Search />
        </ul>
        <ul>
          {open ? <SideNavBar setOpen={setOpen} open={open} /> : ''}
        </ul>
      </nav>
    </>
  );
}
