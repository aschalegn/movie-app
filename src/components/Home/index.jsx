import React from 'react';
import Category from '../Category';
import TopSlider from '../TopSlider';
import './Home.module.css';

export default function Home({ page, setPage }) {
    return (
        <section className="Home">
            <TopSlider id="TopSlider" />
            <Category id={35} category="Comedy" page={page} setPage={setPage} />
            <Category id={28} category="Action" page={page} setPage={setPage} />
            <Category id={80} category="Crime" page={page} setPage={setPage} />
        </section>
    )
}
