import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

import {stat} from "fs";
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './redux/store';
import { changeMaxValue, changeStartValue, InitialStateType } from './redux/reducer';

export type SettingsType = {

}


export const Settings: React.FC = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType,InitialStateType>(state => state.counter)

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValue(e.currentTarget.valueAsNumber))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValue(e.currentTarget.valueAsNumber))
    }

    const errorStyle = {
        backgroundColor:counter.error ? "pink" : "",
        borderColor:counter.error ? "red" : ""
    }

    return (
        <div className="settings">
            <div>
                <span className="spanValue">Max value: </span>
                <input
                    style={errorStyle}
                    type="number"
                    value={counter.maxValue}
                    min={0}
                    onChange={onChangeMaxValueHandler}
                />
            </div>
            <div>
                <span className="spanValue">Start value:</span>
                <input
                    style={errorStyle}
                    type="number"
                    value={counter.startValue}
                    min={0}
                    onChange={onChangeStartValueHandler}
                />
            </div>
        </div>

    )

}