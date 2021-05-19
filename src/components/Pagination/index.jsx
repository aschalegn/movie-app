import React, { useState, useEffect } from 'react';
import "./Pagination.css";

export default function Pagination({ totalPages, getMovies }) {
    const [max, setMax] = useState([]);
    const [active, setActive] = useState("active");
    const perPage = 20;
    const calculateMax = () => {
        let temp = [];
        for (let i = 1; i <= totalPages / perPage; i++) {
            temp.push(i);
        };
        setMax(temp);
    };

    useEffect(() => {
        calculateMax();
    }, [totalPages]);

    const goToPage = page => {
        getMovies(page);
    }

    return (
        <div className="pagination">
            {max.map(n => {
                return <button key={n} onClick={() => { goToPage(n) }} className={active}>{n}</button>
            })}
        </div >
    )
}
