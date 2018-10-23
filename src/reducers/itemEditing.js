import * as Types from './../constants/ActionsTypes';
var inittialState = {};
const itemEditing = (state = inittialState, action) =>{
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing; 