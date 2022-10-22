/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { NavLink } from 'react-router-dom';

function Comp_for_recom(props) {
  return (
    <NavLink to="" style={{textDecoration:'none',color:'black'}}>
       <div class="card m-0 p-0" style={{position:"relative",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",boxShadow:"0 0 5px lightgray"}}>
    <img class="img-fluid" style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px",minHeight:"80px",maxHeight:"80px"}}  src={props.data.ProductImage} alt="Card image cap" />
    <p className='m-0 p-0 px-2 rounded  ' style={{position:"absolute",top:"15px",background:"rgba(255,255,255,0.9)",fontSize:"10px"}}>3.0</p>
    <div class="card-body m-0 p-2">
        <p class="card-title text-wrap m-0 font-weight-bold text-truncate" style={{fontSize:"12px"}}>{props.data.ItemName}</p>
        <p className='text-secondary m-0 p-0'>{props.data.ShopName}</p>
        <div className='d-flex justify-content-between align-items-center mt-1  mb-1'>
        <p className='m-0 p-0 text-danger'> </p>
        
    </div>
    </div>
</div>
    </NavLink>

  )
}

export default Comp_for_recom;