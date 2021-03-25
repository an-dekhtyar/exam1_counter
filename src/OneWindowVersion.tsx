import {Settings} from "./Settings";
import {Button} from "./Button";
import {Display} from "./Display";
import React from "react";


export type OneWindowVersionType = {
    twoWindowVersion:boolean
    num:number
    disablInc:boolean
    disablSet:boolean
    error:boolean
    message:boolean
    changeTwoWindowVersion:()=>void
    incHandler:()=>void
    resetHandler:()=>void
    disablRecet:boolean
    startValue:number
    maxValue:number
    onChangeStartValue:(newStartValue:number)=>void
    onChangeMaxValue:(newMaxValue:number)=>void
    setHandlerTwoWindow:()=>void
}


export const OneWindowVersion = (props:OneWindowVersionType) => {

    const {twoWindowVersion,
        num,
        disablInc,
        disablSet,
        error,
        message,
        changeTwoWindowVersion,
        incHandler,
    resetHandler,
        disablRecet,
    startValue,
    maxValue,
    onChangeStartValue,
        onChangeMaxValue,
        setHandlerTwoWindow,} = props



    return (
        <>
            {!twoWindowVersion
                ?
                <div className="containBlock">
                    <Display
                        value={num}
                        disablInc={disablInc}
                        disablSet={disablSet}
                        error={error}
                        message={message}
                    />
                    <div className={"buttons"}>
                        <Button title={"SET"}
                                onClickHandler={changeTwoWindowVersion}
                                disable={twoWindowVersion}
                        />
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
                :
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
                                onClickHandler={setHandlerTwoWindow}
                                disable={disablSet}
                        />
                    </div>
                </div>
            }
        </>
    )
}