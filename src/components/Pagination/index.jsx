import React, { useState, useEffect } from 'react';
import "./Pagination.css";

export default function Pagination({ totalPages, getMovies, page }) {
    const [max, setMax] = useState([]);
    const [active, setActive] = useState("active");
    const perPage = 20;

    const calculateMax = () => {
        let temp = [];
        for (let i = page; i <= page + 9; i++) {
            temp.push(i);
        };
        setMax(temp);
    };

    useEffect(() => {
        calculateMax();
    }, [totalPages, page]);

    const goToPage = page => {
        getMovies(page);
    }

    return (
        <div className="pagination">
            <button className="prev"
                onClick={() => {
                    if (page > 0) goToPage(page - 1);
                }}>
                Prev</button>
            {
                max.map(n => {
                    return (
                        <button key={n}
                            onClick={() => { goToPage(n) }}
                            className={active}
                        >
                            {n}
                        </button>
                    )
                })
            }

            <button className="prev"
                onClick={() => {
                    if (page < totalPages) goToPage(page + 1);
                }}>
                Next</button>
        </div >
    )
}
