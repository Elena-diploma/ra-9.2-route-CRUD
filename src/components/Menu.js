import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Menu() {
    const classNameIdle = 'menu__item';
    return (
        <nav className="menu">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? `menu__item-active ${classNameIdle}` : classNameIdle
                }
            >
                Главная
            </NavLink>
            <NavLink
                to="/drift"
                className={({ isActive }) =>
                    isActive ? `menu__item-active ${classNameIdle}` : classNameIdle
                }
            >
                Дрифт-такси
            </NavLink>
            <NavLink
                to="/timeattack"
                className={({ isActive }) =>
                    isActive ? `menu__item-active ${classNameIdle}` : classNameIdle
                }
            >
                Time Attack
            </NavLink>
            <NavLink
                to="/forza"
                className={({ isActive }) =>
                    isActive ? `menu__item-active ${classNameIdle}` : classNameIdle
                }
            >
                Forza Karting
            </NavLink>
        </nav>
    );
}