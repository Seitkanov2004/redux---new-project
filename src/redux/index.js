import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "./Reduser";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReduser} from "./Reduser/BasketReduser";
import {FavoriteReducer} from "./Reduser/FavoriteReduser";
import thunk from "redux-thunk";



export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReduser,
    favorites: FavoriteReducer
}), composeWithDevTools(applyMiddleware(thunk)))