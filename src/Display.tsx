import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { InitialStateType } from './redux/reducer';
import { RootStateType } from './redux/store';

type DisplayType = {

}

export const Display: React.FC = () => {


    const counter = useSelector<RootStateType,InitialStateType>(state => state.counter)



    let onstyle = {
        color: counter.disablInc ? "red" : "black"
    }

    return (
        counter.message
            ?
            <div className={"scoreboard"}>
                {counter.error ?
                    <div className="errortext">Incorrect value!</div>
                    :
                    <div className="message">Enter values and press 'SET'</div>
                }
            </div>

            :
            <div className={"scoreboard"}>
                <div style={onstyle} className={"value"}>{counter.num}</div>
            </div>





    )
}