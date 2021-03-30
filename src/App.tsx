import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from './Display'
import {Settings} from './Settings'
import {Button} from './Button'
import {TwoWindowsVersion} from "./TwoWindowsVersion";
import {OneWindowVersion} from "./OneWindowVersion";


function App() {

    const [num, setNum] = useState<number>(0)
    const [disablInc, setDisablInc] = useState<boolean>(false)
    const [disablRecet, setDisablRecet] = useState<boolean>(true)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [disablSet, setDisablSet] = useState<boolean>(true)
    const [message, setMessage] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [version, setVersion] = useState<boolean>(true)
    const [twoWindowVersion, setTwoWindowVersion] = useState<boolean>(false)

    useEffect(()=>{
        let valueString = localStorage.getItem('counterValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setNum(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(num))
    }, [num])


    useEffect(()=>{
        let startValue = localStorage.getItem('minValue')
        if (startValue) {
            let newStartValue = JSON.parse(startValue)
            setStartValue(newStartValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('minValue', JSON.stringify(startValue))
    },[startValue])



    useEffect(()=>{
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            let newMaxValue = JSON.parse(maxValue)
            setMaxValue(newMaxValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue])



    const incHandler = () => {
        const incNum = num + 1
        setDisablSet(true)
        setNum(incNum)
        setDisablRecet(false)
        if (incNum === maxValue) {
            setDisablInc(true)
        }
    }

    const resetHandler = () => {
        setNum(startValue)
        setDisablInc(false)
        setDisablRecet(true)
    }

    const setHandler = () => {
        setDisablSet(true)
        setNum(startValue)
        setDisablInc(false)
        setMessage(false)
    }

    const setHandlerTwoWindow = () => {
        setTwoWindowVersion(false)
        setDisablSet(true)
        setNum(startValue)
        setDisablInc(false)
        setMessage(false)

    }

    const onChangeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue)
        setDisablRecet(true)
        setMessage(true)
        if (newStartValue < 0 || newStartValue >= maxValue) {
            setError(true)
            setDisablSet(true)
        } else {
            setError(false)
            setDisablSet(false)
            setMessage(true)
            setDisablInc(true)
        }
    }

    const onChangeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
        setMessage(true)
        setDisablRecet(true)
        if (newMaxValue < 0 || newMaxValue <= startValue) {
            setError(true)
            setDisablSet(true)
        } else {
            setError(false)
            setDisablSet(false)
            setMessage(true)
            setDisablInc(true)
        }
    }

    const changeTwoWindowVersion = () => {
        setTwoWindowVersion(!twoWindowVersion)
    }

    const changeVersion = () => {
        setVersion(!version)
    }

    return (<>
            <button onClick={changeVersion}>◻◻/◻</button>
            <div className="App">
                {version
                    ?
                    <TwoWindowsVersion
                        startValue={startValue}
                        maxValue={maxValue}
                        error={error}
                        onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue}
                        setHandler={setHandler}
                        disablSet={disablSet}
                        num={num}
                        disablInc={disablInc}
                        message={message}
                        resetHandler={resetHandler}
                        disablRecet={disablRecet}
                        incHandler={incHandler}
                    />
                    :
                    <OneWindowVersion
                        twoWindowVersion={twoWindowVersion}
                        num={num}
                        disablInc={disablInc}
                        disablSet={disablSet}
                        error={error}
                        message={message}
                        changeTwoWindowVersion={changeTwoWindowVersion}
                        incHandler={incHandler}
                        resetHandler={resetHandler}
                        disablRecet={disablRecet}
                        startValue={startValue}
                        maxValue={maxValue}
                        onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue}
                        setHandlerTwoWindow={setHandlerTwoWindow}

                    />}
            </div>
        </>
    );
}

export default App;
