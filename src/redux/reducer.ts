export type InitialStateType = typeof initialState

type ActionType = IncrementType | ResetType | SetType | Set2Type | changeVersionType | changeVersion2Type | changeStartValueType | changeMaxValueType

type IncrementType = ReturnType<typeof increment>
type ResetType = ReturnType<typeof reset>
type SetType = ReturnType<typeof set>
type Set2Type = ReturnType<typeof set2>
type changeVersionType = ReturnType<typeof changeVersion>
type changeVersion2Type = ReturnType<typeof changeVersion2>
type changeStartValueType = ReturnType<typeof changeStartValue>
type changeMaxValueType = ReturnType<typeof changeMaxValue>


const INCREMENT = 'INCREMENT'
const RESET = 'RESET'
const SET = 'SET'
const SET_TWO_WINDOW_VERSION = 'SET_TWO_WINDOW_VERSION'
const CHANGE_VERSION = 'CHANGE_VERSION'
const CHANGE_VERSION2 = 'CHANGE_VERSION2'
const CHANGE_START_VALUE = 'CHANGE_START_VALUE'
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'

const initialState = {
    num: 0,
    disablInc: false,
    disablReset: true,
    startValue: 0,
    maxValue: 5,
    disablSet: true,
    message: false,
    error: false,
    version: true,
    twoWindowVersion: false
}



export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INCREMENT:
            const incNum = state.num + 1
            return {
                ...state,
                num: incNum,
                disablSet: true,
                disablReset: false,
                disablInc: incNum === state.maxValue ? true : false
            }
        case RESET:
            return {
                ...state,
                num: state.startValue,
                disablInc: false,
                disablReset: true
            }
        case SET:
            return {
                ...state,
                disablSet: true,
                num: state.startValue,
                disablInc: false,
                message: false
            }
        case SET_TWO_WINDOW_VERSION:
            return {
                ...state,
                twoWindowVersion: false,
                disablSet: true,
                num: state.startValue,
                disablInc: false,
                message: false
            }
        case CHANGE_VERSION:
            return {
                ...state,
                version: !state.version
            }
        case CHANGE_VERSION2:
            return {
                ...state,
                twoWindowVersion: !state.twoWindowVersion
            }
        case CHANGE_START_VALUE:

            if (action.newStartValue < 0 || action.newStartValue >= state.maxValue) {
                return {
                    ...state,
                    startValue: action.newStartValue,
                    error: true,
                    disablSet: true
                }
            } else {
                return {
                    ...state,
                    startValue: action.newStartValue,
                    disablReset: true,
                    message: true,
                    error: false,
                    disablSet: false,
                    disablInc: true
                }
            }
        case CHANGE_MAX_VALUE:
            if (action.newMaxValue < 0 || action.newMaxValue <= state.startValue) {
                return {
                    ...state,
                    maxValue: action.newMaxValue,
                    error: true,
                    disablSet: true
                }
            } else {
                return {
                    ...state,
                    maxValue: action.newMaxValue,
                    message: true,
                    disablReset: true,
                    error: false,
                    disablSet: false,
                    disablInc: true
                }
            }
        default: return state
    }
}


export const increment = () => ({ type: INCREMENT }) as const
export const reset = () => ({ type: RESET }) as const
export const set = () => ({ type: SET }) as const
export const set2 = () => ({ type: SET_TWO_WINDOW_VERSION }) as const
export const changeVersion = () => ({ type: CHANGE_VERSION }) as const
export const changeVersion2 = () => ({ type: CHANGE_VERSION2 }) as const
export const changeStartValue = (newStartValue: number) => ({ type: CHANGE_START_VALUE, newStartValue }) as const
export const changeMaxValue = (newMaxValue: number) => ({ type: CHANGE_MAX_VALUE, newMaxValue }) as const

