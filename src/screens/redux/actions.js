export const InAction =(value)=> async dispatch =>{
   dispatch({
        type:"Add",
        payload:value
    })
}

export const DeAction =(value)=> async dispatch =>{
     dispatch({
        type:"remove",
        payload:value
    })
}

export const RemoveAll =()=> async dispatch =>{
    dispatch({
        type:"RemoveAll",
      
    })
    
}

export const QuantityAdd =(value,quantity)=> async dispatch =>{
    dispatch({
        type:"Quantity",
        payload:{value,quantity}
    })
    
}

