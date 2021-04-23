import {Settings} from "./Settings";
import {Button} from "./Button";
import {Display} from "./Display";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./redux/store";
import { changeVersion2, increment, InitialStateType, reset, set2 } from "./redux/reducer";




export const OneWindowVersion = () => {

    const dispatch = useDispatch()
    const counter = useSelector<RootStateType,InitialStateType>(state => state.counter)

    const incHandler = () => {
        dispatch(increment())
    }
    const resetHandler = () => {
        dispatch(reset())
    }
    const changeTwoWindowVersion = () => {
        dispatch(changeVersion2())
    }
    const setHandlerTwoWindow = () => {
        dispatch(set2())
    }

    return (
        <>
            {!counter.twoWindowVersion
                ?
                <div className="containBlock">
                    <Display/>
                    <div className={"buttons"}>
                        <Button title={"SET"}
                                onClickHandler={changeTwoWindowVersion}
                                disable={counter.twoWindowVersion}
                        />
                        <Button
                            title={"INC"}
                            onClickHandler={incHandler}
                            disable={counter.disablInc}
                        />
                        <Button
                            title={"RESET"}
                            onClickHandler={resetHandler}
                            disable={counter.disablReset}
                        />
                    </div>
                </div>
                :
                <div className="containBlock">
                    <Settings/>
                    <div className={"buttons"}>
                        <Button title={"SET"}
                                onClickHandler={setHandlerTwoWindow}
                                disable={counter.disablSet}
                        />
                    </div>
                </div>
            }
        </>
    )
}