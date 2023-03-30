const initialState = {
    basket: []
}

export const BasketReduser = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            let foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct){
                return {...state, basket: state.basket.map(el => el.id === foundProduct.id ? {...el, quantity: el.quantity + 1} : 1) }
            }else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        default: return state
    }
}