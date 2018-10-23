import * as Types from './../constants/ActionsTypes';
import callApi from './../utils/apiCaller';
export const actFetchProductsRequest = () =>{
    return dispatch =>{
        return callApi('testapi', 'GET', null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
        
    }
    
}

export const actFetchProducts = products =>{
    return {
        type: Types.FETECH_PRODUCTS,
        products 
    }
}


export const actDeleteProductRequest = (id) =>{
    return dispatch =>{
        return callApi(`testapi/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) =>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = product =>{
    return dispatch =>{
        return callApi('testapi', 'POST', product).then(res=>{
            dispatch(actAddProduct(res.data));
        })
    }
}
export const actAddProduct = (product) =>{
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}


export const actGetProductRequest = (id) =>{
    return dispatch =>{
        return callApi(`testapi/${id}`,'GET', null ).then(res =>{
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = (product) =>{
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) =>{
    return dispatch =>{
        return callApi(`testapi/${product.id}`, 'PUT', product).then(res =>{
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) =>{
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}