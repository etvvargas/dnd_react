// Author: Ethan Vargas
import React from 'react'
import './Global.css';
import './Sheet.css';
import BackImage from './BackImage';
import { useState, useEffect } from 'react';

export default function Sheet({ sheet_type, delete_function, sheet_info, update_function }) {
    const [name, setName] = useState(sheet_type.name);
    const [ac, setAc] = useState(sheet_type.ac);
    const [init, setInit] = useState(sheet_type.init);
    const [speed, setSpeed] = useState(sheet_type.speed);
    const [currHP, setCurrHP] = useState(sheet_type.currHP);
    const [tempHP, setTempHP] = useState(sheet_type.tempHP);
    const [s1, setS1] = useState(sheet_type.s1);
    const [s2, setS2] = useState(sheet_type.s2);
    const [s3, setS3] = useState(sheet_type.s3);
    const [f1, setF1] = useState(sheet_type.f1);
    const [f2, setF2] = useState(sheet_type.f2);
    const [f3, setF3] = useState(sheet_type.f3);
    const [lvl, setLvl] = useState(sheet_type.lvl);
    const [className, setClassName] = useState(sheet_type.className);

    useEffect(() => {
        updateInfo();
    }, [name, ac, init, speed, currHP, tempHP, s1, s2, s3, f1, f2, f3, lvl, className])

    function handleDeleteClick() {
        delete_function(sheet_info.id)
    }
    function updateInfo() {
        update_function(sheet_info.id,
                        name,
                        ac,
                        init,
                        speed,
                        currHP,
                        tempHP,
                        s1,
                        s2,
                        s3,
                        f1,
                        f2,
                        f3,
                        lvl,
                        className
                        );
    }
    return (
        <div className="SheetContainer">
            <div className="Sheet">
                <BackImage sheet_type={sheet_type}/>
                <div className="SheetContent">

                    <div className="SheetSection1">
                        <div className="CharacterNameContainer">
                            <input type="text" className="CharacterName" placeholder="Name" defaultValue={sheet_info.name} onBlur={e => setName(e.target.value)} />
                        </div>
                        <div className="DeleteButtonContainer">
                            <button className="DeleteButton" onClick={handleDeleteClick}>
                                <span className="DeleteText">x</span>
                            </button>
                        </div>
                    </div>

                    <div className="SheetSection2">
                        <div className="ACContainer">
                            <div className="VerticalPadding" />
                            <input type="text" className="StatInput" maxLength="3" placeholder="0" defaultValue={sheet_info.ac} onBlur={e => setAc(e.target.value)} />
                            <p className="StatName">Armor Class</p>
                        </div>
                        <div className="InitiativeContainer">
                            <div className="VerticalPadding"></div>
                            <input type="text" className="StatInput" maxLength="3" placeholder="0" defaultValue={sheet_info.init} onBlur={e => setInit(e.target.value)} />
                            <p className="StatName">Initiative</p>
                        </div>
                        <div className="SpeedContainer">
                            <div className="VerticalPadding"></div>
                            <input type="text" className="StatInput" maxLength="3" placeholder="0" defaultValue={sheet_info.speed} onBlur={e => setSpeed(e.target.value)} />
                            <p className="StatName">Speed</p>
                        </div>
                    </div>

                    <div className="SheetSection3">
                        <div className="CurrentHPContainer">
                            <input type="text" className="HPInput" maxLength="3" placeholder="0" defaultValue={sheet_info.currHP} onBlur={e => setCurrHP(e.target.value)} />
                            <p className="HPName">Current HP</p>
                        </div>
                        <div className="TempHPContainer">
                            <input type="text" className="HPInput" maxLength="3" placeholder="0" defaultValue={sheet_info.tempHP} onBlur={e => setTempHP(e.target.value)} />
                            <p className="HPName">Temporary HP</p>
                        </div>
                    </div>

                    <div className="SheetSection4">
                        <div className="DSPadding" />
                        <div className="DSSuccessContainer">
                            <p className="DSResultText">Success</p>
                            <div className="DSCheckboxContainer">
                                <input type="checkbox" className="DSSuccess" checked={sheet_info.s1} onChange={e => setS1(e.target.value)} />
                                <input type="checkbox" className="DSSuccess" checked={sheet_info.s2} onChange={e => setS2(e.target.value)} />
                                <input type="checkbox" className="DSSuccess" checked={sheet_info.s3} onChange={e => setS3(e.target.value)} />
                            </div>
                        </div>
                        <div className="DSContainer">
                            <p className="DSText">Death Saves</p>
                        </div>
                        <div className="DSFailureContainer">
                            <p className="DSResultText">Failure</p>
                            <div className="DSCheckboxContainer">
                                <input type="checkbox" className="DSFailure" checked={sheet_info.f1} onChange={e => setF1(e.target.value)} />
                                <input type="checkbox" className="DSFailure" checked={sheet_info.f2} onChange={e => setF2(e.target.value)} />
                                <input type="checkbox" className="DSFailure" checked={sheet_info.f3} onChange={e => setF3(e.target.value)} />
                            </div>
                        </div>
                        <div className="DSPadding" />
                    </div>

                    <div className="SheetSection5">
                        <div className="LevelContainer">
                            <p className="LevelText">Lv.</p>
                            <input type="text" className="LevelInput" maxLength="3" placeholder="0" defaultValue={sheet_info.lvl} onBlur={e => setLvl(e.target.value)} />
                        </div>
                        <div className="ClassContainer">
                            <input type="text" className="ClassName" placeholder="Class" defaultValue={sheet_info.className} onBlur={e => setClassName(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
