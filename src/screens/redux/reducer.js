/* eslint-disable default-case */
const item=[]

export default function reducer(state = {item:[]},action){
    const {type,payload} = action;
     
    switch(type){
        case "Add":
            return { ...state,item: [...state.item, action.payload] };

        case "remove":
            
           // return { ...state,item: [...state.item, action.payload] };

                return  {...state, item : state.item.filter(event => action.payload.id !== event.id)} // payload = id in this case


        case "RemoveAll":
            return  {...state, item :[]} // payload = id in this case
        
        case "Quantity":
            return  {...state, item :state.item.map(
                (content, i) => content.id === action.payload.value.id ? {...content, Quantity: action.payload.quantity}
                                        : content
            )}
     
             
        default:
            return state;    
    }
}