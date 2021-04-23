import {Settings} from "./Settings";
import {Button} from "./Button";
import {Display} from "./Display";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./redux/store";
import { increment, InitialStateType, reset, set } from "./redux/reducer";


export const TwoWindowsVersion = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType,InitialStateType>(state => state.counter)

    const setHandler = () => {
        dispatch(set())
    }
    const incHandler = () => {
        dispatch(increment())
    }
    const resetHandler = () => {
        dispatch(reset())
    }


    return (<>
        <div className="containBlock">
            <Settings/>
            <div className={"buttons"}>
                <Button title={"SET"} onClickHandler={setHandler} disable={counter.disablSet}/>
            </div>
        </div>
        <div className="containBlock">
            <Display
            />
            <div className={"buttons"}>
                <Button title={"INC"} onClickHandler={incHandler} disable={counter.disablInc}
                />
                <Button title={"RESET"} onClickHandler={resetHandler} disable={counter.disablReset}
                />

            </div>
        </div>
    </>)
}