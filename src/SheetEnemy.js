// Author: Ethan Vargas
import React from 'react'
import Sheet from './Sheet';
import './Global.css';
import './Sheet.css';

export default function SheetEnemy({ deleteEnemy, enemyInfo, updateEnemy }) {
    return (
        <Sheet sheet_type="enemy" delete_function={deleteEnemy} sheet_info={enemyInfo} update_function={updateEnemy} />
    )
}
