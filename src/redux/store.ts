import { applyMiddleware, combineReducers, createStore } from "redux"
import { JsxEmit } from "typescript"
import { counterReducer } from "./reducer"
import thunk from 'react-redux'
export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter:counterReducer
})
let preloader
let presistedTodosString = localStorage.getItem('app-state')
if (presistedTodosString) {
    preloader = JSON.parse(presistedTodosString)
}
export const store = createStore(rootReducer, preloader)

store.subscribe(() => {
    localStorage.setItem('app state', JSON.stringify(store.getState()))
    localStorage.setItem('value', JSON.stringify(store.getState().counter.num))
})