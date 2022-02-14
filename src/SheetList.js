// Author: Ethan Vargas
import React from 'react'
import './Global.css';
import './Sheet.css';
import Sheet from './Sheet';
import Sheets from './Sheets';
import SheetCharacter from './SheetCharacter';
import SheetEnemy from './SheetEnemy';

export default function SheetList({ enemy_delete, character_delete, character_list, enemy_list, character_update, enemy_update }) {
  return (
    <div className="BodyContent">
        <div className="BodyEnemy">
            <Sheets sheet_type="enemies" deleteFunction={enemy_delete} List={enemy_list} updateFunction={enemy_update} />
        </div>
        <div className="BodyLine" />
        <div className="BodyCharacter">
            <Sheets sheet_type="characters" deleteFunction={character_delete} List={character_list} updateFunction={character_update} />
        </div>
    </div>
  )
}
