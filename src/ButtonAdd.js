// Author: Ethan Vargas
import { render } from '@testing-library/react'
import React from 'react'
import './Global.css';
import './FloatingButton.css';

export default function SheetEnemy({ direction_param, add_character, add_enemy }) {

    if (direction_param === "right") {
        return (
            <div className="right-corder-container">
                <button className="right-corder-container-button" onClick={add_character} >
                    <span className="short-text">+</span>
                    <span className="long-text">Add Character</span>
                </button>
            </div>
        )
    } else if (direction_param === "left") {
        return (
            <div className="left-corder-container">
                <button className="left-corder-container-button" onClick={add_enemy} >
                    <span className="short-text">+</span>
                    <span className="long-text">Add Enemy</span>
                </button>
            </div>
        )
    }

    return (
        <div>ButtonAdd</div>
    )
}
