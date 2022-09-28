

import React,{ useEffect, useState} from 'react';
export default function Text() {
    // buttons to decrease and increase 
     const [counter, setCounter] = useState(1);  
     const incrementCount = () => {  
       // Update state with incremented value  
       setCounter(counter + 1);  
     };  
     const decrementCount = () => {  
       // Update state with incremented value  
       setCounter((c) => Math.max(c - 1, 0));  
     }; 

     return(
     
        <div className="btn-group col-5" role="group"> <button type="button" className="btn btn-warning col-3" onClick={decrementCount} >-</button>  
        <input type="number" min="1" defaultValue={counter} value={counter} className="form-control col-5" />  
        <button  type="button"  className="btn btn-warning col-3"  onClick={incrementCount} > + </button> 
      </div>

     )

    
}