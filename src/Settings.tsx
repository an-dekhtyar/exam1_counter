import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

import {stat} from "fs";

export type SettingsType = {
    startValue: number
    maxValue: number
    onChangeMaxValue:(newMaxValue:number)=>void
    onChangeStartValue:(newStartValue:number)=>void
    error:boolean
}


export const Settings: React.FC<SettingsType> = (props) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(e.currentTarget.valueAsNumber)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(e.currentTarget.valueAsNumber)
    }

    const errorStyle = {
        backgroundColor:props.error ? "pink" : "",
        borderColor:props.error ? "red" : ""
    }

    return (
        <div className="settings">
            <div>
                <span className="spanValue">Max value: </span>
                <input
                    style={errorStyle}
                    type="number"
                    value={props.maxValue}
                    min={0}
                    onChange={onChangeMaxValueHandler}
                />
            </div>
            <div>
                <span className="spanValue">Start value:</span>
                <input
                    style={errorStyle}
                    type="number"
                    value={props.startValue}
                    min={0}
                    onChange={onChangeStartValueHandler}
                />
            </div>
        </div>

    )

}