import axios from "axios";

const inittaialState = {
    product: [],
}

export const getProduct = () => {
    return async (dispatch) => {
        try{
            const url = await axios("https://fakestoreapi.com/products")
            const {data} = await url
            dispatch({type: "GET_PRODUCT", payload: data})
        }catch (e) {
            console.log(e, "error")
        }
    }
}

export const MainReducer = (state = inittaialState, action) => {
    switch (action.type){
        case "GET_PRODUCT":
            return {...state, product: action.payload}
        default: return state
    }
}