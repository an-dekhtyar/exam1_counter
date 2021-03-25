import {Settings} from "./Settings";
import {Button} from "./Button";
import {Display} from "./Display";
import React from "react";

export type TwoWindowsVersionType = {
    startValue: number
    maxValue: number
    error: boolean
    onChangeStartValue: (newStartValue: number) => void
    onChangeMaxValue: (newStartValue: number) => void
    setHandler: () => void
    disablSet: boolean
    num: number
    disablInc: boolean
    message: boolean
    resetHandler: () => void
    disablRecet: boolean
    incHandler:()=>void
}


export const TwoWindowsVersion = (props:TwoWindowsVersionType) => {

    const {
        startValue, maxValue,
        error, onChangeStartValue,
        onChangeMaxValue, setHandler,
        disablSet, num,
        disablInc, message,
        resetHandler, disablRecet,incHandler
    } = props


    return (<>
        <div className="containBlock">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                error={error}
                onChangeStartValue={onChangeStartValue}
                onChangeMaxValue={onChangeMaxValue}
            />
            <div className={"buttons"}>
                <Button title={"SET"}
                        onClickHandler={setHandler}
                        disable={disablSet}
                />
            </div>
        </div>
        <div className="containBlock">
            <Display
                value={num}
                disablInc={disablInc}
                disablSet={disablSet}
                error={error}
                message={message}
            />
            <div className={"buttons"}>
                <Button
                    title={"INC"}
                    onClickHandler={incHandler}
                    disable={disablInc}
                />
                <Button
                    title={"RESET"}
                    onClickHandler={resetHandler}
                    disable={disablRecet}
                />

            </div>
        </div>
    </>)
}