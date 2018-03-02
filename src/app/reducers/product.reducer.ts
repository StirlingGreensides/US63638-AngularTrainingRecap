import * as productActions from './../actions/product.actions'

export function productReducer(state = [], action: productActions.Action){
    switch(action.type){
        case productActions.LOAD_PRODUCTS_SUCCESS:{
            return action.payload;
        }
        case productActions.DELETE_PRODUCT_SUCCESS:{
            var newState = state.filter(product => product.id !== action.payload);
            return newState;
        }
        case productActions.ADD_PRODUCT_SUCCESS:{
            return [...state, action.payload];
        }
        default:{
            return state;
        }
    }
}