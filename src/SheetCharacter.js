// Author: Ethan Vargas
import React from 'react'
import Sheet from './Sheet';
import './Global.css';
import './Sheet.css';

export default function SheetCharacter({ deleteCharacter, characterInfo, updateCharacter }) {
  return (
    <Sheet sheet_type="character" delete_function={deleteCharacter} sheet_info={characterInfo} update_function={updateCharacter} />
  )
}
