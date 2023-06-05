import React from "react";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className="header-container">
            <nav className="header" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <li>
                        <a className="active" href="#home" style={{ color: theme.color }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a style={{ color: theme.color }} href="#news">News</a>
                    </li>
                    <li>
                        <a style={{ color: theme.color }} href="#about">About</a>
                    </li>
                    <li>
                        <a style={{ color: theme.color }} href="#contact">Contact</a>
                    </li>
                

                <div style={{ position: "relative"}}>
                    <a
                        className="switch-mode"
                        href="#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: "none",
                            marginLeft:"83em"
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? "Dark" : "Light"} mode
                    </a>
                </div>
                </ul>
            </nav>
        </div>
    )
}
