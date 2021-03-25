import React, { useState } from 'react';
import './App.css';

type DisplayType = {
    value: number
    disablInc: boolean
    disablSet: boolean
    error: boolean
    message: boolean

}

export const Display: React.FC<DisplayType> = (props) => {

    const { disablSet, disablInc, value, error, message } = props

    let onstyle = {
        color: disablInc ? "red" : "black"
    }

    return (
        message
            ?
            <div className={"scoreboard"}>
                {error ?
                    <div className="errortext">Incorrect value!</div>
                    :
                    <div className="message">Enter values and press 'SET'</div>
                }
            </div>

            :
            <div className={"scoreboard"}>
                <div style={onstyle} className={"value"}>{value}</div>
            </div>





    )
}