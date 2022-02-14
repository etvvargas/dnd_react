// Author: Ethan Vargas
import dnd_logo from './dnd_logo.svg';
import './Global.css';
import './FloatingButton.css';
import './Sheet.css';
import './Main.css';
import react, { useState, useRef, useEffect } from 'react';
import Sheet from './Sheet';
import SheetCharacter from './SheetCharacter';
import SheetEnemy from './SheetEnemy';
import ButtonAdd from './ButtonAdd';
import SheetList from './SheetList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY_LISTS = 'dndTracker.lists'

function Main() {
    const [CharacterList, setCharacterList] = useState([])
    const [EnemyList, setEnemyList] = useState([])
    
    useEffect(() => {
        const storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LISTS))
        if (storedLists) {
            setCharacterList(storedLists.characters)
            setEnemyList(storedLists.enemies)
        } 
    }, [])

    useEffect(() => {
        // CharacterList.forEach((char, i) => console.log("Update " + i + ": " + char.id + ' ' + char.name + ' ' + char.ac
        // + ' ' + char.init + ' ' + char.speed + ' ' + char.currHP + ' ' + char.tempHP + ' ' + char.s1 + ' '
        // + char.s2 + ' ' + char.s3 + ' ' + char.f1 + ' ' + char.f2 + ' ' + char.f3 + ' ' + char.lvl + ' ' + char.className));
        localStorage.setItem(LOCAL_STORAGE_KEY_LISTS, JSON.stringify({characters: CharacterList, enemies: EnemyList}))
    }, [CharacterList, EnemyList])

    function updateCharacter(id, name, ac, init, speed, currHP, tempHP, s1, s2, s3, f1, f2, f3, lvl, className) {
        const NewCharacterList = [...CharacterList]
        const character = NewCharacterList.find(CharacterList => CharacterList.id === id)
        if (name)
            character.name = name
        if (ac)
            character.ac = ac
        if (init)
            character.init = init
        if (speed)
            character.speed = speed
        if (currHP)
            character.currHP = currHP
        if (tempHP)
            character.tempHP = tempHP
        if (s1)
            character.s1 = s1
        if (s2)
            character.s2 = s2
        if (s3)
            character.s3 = s3
        if (f1)
            character.f1 = f1
        if (f2)
            character.f2 = f2
        if (f3)
            character.f3 = f3
        if (lvl)
            character.lvl = lvl
        if (className)
            character.className = className
        setCharacterList(NewCharacterList)
    }
    function updateEnemy(id, name, ac, init, speed, currHP, tempHP, s1, s2, s3, f1, f2, f3, lvl, className) {
        const NewEnemyList = [...EnemyList]
        const enemy = NewEnemyList.find(EnemyList => EnemyList.id === id)
        if (name)
            enemy.name = name
        if (ac)
            enemy.ac = ac
        if (init)
            enemy.init = init
        if (speed)
            enemy.speed = speed
        if (currHP)
            enemy.currHP = currHP
        if (tempHP)
            enemy.tempHP = tempHP
        if (s1)
            enemy.s1 = s1
        if (s2)
            enemy.s2 = s2
        if (s3)
            enemy.s3 = s3
        if (f1)
            enemy.f1 = f1
        if (f2)
            enemy.f2 = f2
        if (f3)
            enemy.f3 = f3
        if (lvl)
            enemy.lvl = lvl
        if (className)
            enemy.className = className
        setEnemyList(NewEnemyList)
    }

    function deleteCharacter(id) {
        var NewCharacterList = [...CharacterList]
        NewCharacterList = NewCharacterList.filter(function(char){
            return char.id !== id;
        })
        setCharacterList(NewCharacterList)
    }
    function deleteEnemy(id) {
        var NewEnemyList = [...EnemyList]
        NewEnemyList = NewEnemyList.filter(function(en){
            return en.id !== id;
        })
        setEnemyList(NewEnemyList)
    }

    function handleAddCharacter(e) {
        
        var uuid = uuidv4();
        return setCharacterList(prevCharacterList => {
                return [...prevCharacterList, { key: uuid,
                                                id: uuid,
                                                name: '',
                                                ac: '',
                                                init: '',
                                                speed: '',
                                                currHP: '',
                                                tempHP: '',
                                                s1: false,
                                                s2: false,
                                                s3: false,
                                                f1: false,
                                                f2: false,
                                                f3: false,
                                                lvl: '',
                                                className: '' }]
            })
    }
    function handleAddEnemy(e) {
        var uuid = uuidv4();
        return setEnemyList(prevEnemyList => {
                return [...prevEnemyList, { key: uuid,
                                            id: uuid,
                                            name: '',
                                            ac: '',
                                            init: '',
                                            speed: '',
                                            currHP: '',
                                            tempHP: '',
                                            s1: false,
                                            s2: false,
                                            s3: false,
                                            f1: false,
                                            f2: false,
                                            f3: false,
                                            lvl: '',
                                            className: '' }]
            })
    }

    return (
        <div className="Main" style={{width : '100vw', height : '100vh'}}>
            <div className="TopBar">
                <div className="TopBarContainer">
                    <div className="TopBarLeft">
                        <img src={dnd_logo} className="DnDLogo" />
                    </div>
                    <div className="TopBarCenter">
                        <p className="TopBarText">Dungeon's And Dragons Encounter Tracker</p>
                    </div>
                    <div className="TopBarRight">
                        <img src={dnd_logo} className="DnDLogo" />
                    </div>
                </div>
            </div>
            <div className="Body">
                <div className="BodyPadding" />
                <SheetList enemy_delete={deleteEnemy} character_delete={deleteCharacter} character_list={CharacterList} enemy_list={EnemyList} enemy_update={updateEnemy} character_update={updateCharacter}/>
            </div>
            <ButtonAdd direction_param="left" add_character={handleAddCharacter} add_enemy={handleAddEnemy} />
            <ButtonAdd direction_param="right" add_character={handleAddCharacter} add_enemy={handleAddEnemy} />
        </div>
    );
  
}

export default Main;