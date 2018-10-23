import * as Types from './../constants/ActionsTypes'; 
var initialState = [];
var findIndex = (products, id) =>{
    // console.log(products);
    // console.log(id);
    var result = -1;
    products.forEach((product,index) => {
        // console.log(index);
        if(product.id === id){
            result = index;
            // console.log(result);
        }
    });
    // console.log(result);
    return result;
}
const products = (state = initialState, action)=>{
    var index = -1;
    var {id, product} = action;
    //  console.log(action);
    // console.log(state);

    switch(action.type){
        case Types.FETECH_PRODUCTS:
            state = action.products;
            return [...state];
            // return state
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            // console.log(state);
            // console.log([...state]);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product); 
            return [...state];

        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return[...state];
      
    } 
    
  
}


export default products;