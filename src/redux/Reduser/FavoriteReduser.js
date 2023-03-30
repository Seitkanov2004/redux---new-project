const initialState = {
    favorites: []
}

export const FavoriteReducer = (state = initialState, action) => {
            switch (action.type){
                case "ADD_TO_FAVORITE":
                    let foundFavorite = state.favorites.find(el => el.id === action.payload.id)
                    if (foundFavorite){
                        return {...state, favorites: state.favorites.map(el => el.id === foundFavorite.id ? {...el, quantity: el.quantity+ 1} : 1)}
                    }else {
                        return {...state, favorites: [...state.favorites, {...action.payload, quantity: 1}]}
                    }
                case "DECREASE_FAVORITE" : {

                }
                default: return state
            }
}