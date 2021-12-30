import React from 'react';
import Category from '../Category';
import TopSlider from '../TopSlider';

export default function Home({ page, setPage }) {
    return (
        <section>
            <TopSlider />
            <Category id={35} category="Comedy" page={page} setPage={setPage} />
            <Category id={28} category="Action" page={page} setPage={setPage} />
            <Category id={80} category="Crime" page={page} setPage={setPage} />
        </section>
    )
}
