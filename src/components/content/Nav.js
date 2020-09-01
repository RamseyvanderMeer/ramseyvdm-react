import React from 'react';
import '../../css/nav.css'

export default function Nav() {
    return (
        <body className="nav">
            <ul className="nav__list-container">
                <li data-text="home"><a className="nav__box" href="/">Home</a></li>
                <li data-text="About"><a className="nav__box" href="/about">About Me</a></li>
                <li data-text="Projects"><a className="nav__box" href="/projects">Projects</a></li>
                <li data-text="Photography"><a className="nav__box" href="/photography">Photography</a></li>
                <li data-text="Contact"><a className="nav__box" href="/contact">contact</a></li>
            </ul>
        </body>
    )
}