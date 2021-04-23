import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from './Display'
import {Settings} from './Settings'
import {Button} from './Button'
import {TwoWindowsVersion} from "./TwoWindowsVersion";
import {OneWindowVersion} from "./OneWindowVersion";
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './redux/store';
import { changeVersion, InitialStateType } from './redux/reducer';


function AppWithRedux() {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType,InitialStateType>(state => state.counter)
    const changeV = () => {
        dispatch(changeVersion())
    }

    return (<>
            <button onClick={changeV}>◻◻/◻</button>
            <div className="App">
                {counter.version
                    ?
                    <TwoWindowsVersion/>
                    :
                    <OneWindowVersion/>}
            </div>
        </>
    );
}

export default AppWithRedux;
