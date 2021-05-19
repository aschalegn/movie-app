import React from 'react';
import Category from '../Category';
import TopSlider from '../TopSlider';
import './Home.module.css';

export default function Home() {
    return (
        <section className="Home">
            <TopSlider id="TopSlider" />
            <Category id={35} category="Comedy" />
            <Category id={28} category="Action" />
            <Category id={80} category="Crime" />
        </section>
    )
}
