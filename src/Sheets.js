// Author: Ethan Vargas
import React from 'react'
import Sheet from './Sheet';
import SheetCharacter from './SheetCharacter';
import SheetEnemy from './SheetEnemy';

export default function Sheets({ sheet_type, List, deleteFunction, updateFunction }) {
    if (sheet_type === "characters") {
        return (
            List.map(character => {
                return <SheetCharacter key={character.id} deleteCharacter={deleteFunction} characterInfo={character} updateCharacter={updateFunction}/>
            })
        )
    } else if (sheet_type === "enemies") {
        return (
            List.map(enemy => {
                return <SheetEnemy id={enemy.id} key={enemy.id} deleteEnemy={deleteFunction} enemyInfo={enemy} updateEnemy={updateFunction} />
            })
        )
    }

    return (
        <div>Sheets</div>
    )
}
