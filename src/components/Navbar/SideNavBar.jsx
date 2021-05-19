import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import * as style from "./NavBar.module.css";

export default function SideNavBar({ setOpen, open }) {
    return (
        <ul className={style.SideNavBar}>
            <span onClick={() => setOpen(!open)} >X</span>
            <Search />
            <li><center></center><Link to={`/category/comedy/35`}>Comedy</Link></li>
            <li><center></center><Link to={`/category/crime/80`}>Crime</Link></li>
            <li><center></center><Link to={`/category/action/28`}>Action</Link></li>
            <li><center></center><Link to={`/category/fantasy/14`}>Fantasy</Link></li>
            <li><center></center><Link to={`/category/family/10751`}>Family</Link></li>
            <li><center></center><Link to={`/category/horor/27`}>Horor</Link></li>
            <li><center></center><Link to={`/category/advanture/12`}>Advanture</Link></li>
        </ul>
    )
}
