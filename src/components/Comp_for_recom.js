/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Comp_for_recom() {
  return (
    <div class="card m-0 p-0" style={{position:"relative",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",boxShadow:"0 0 5px lightgray"}}>
    <img class="img-fluid" style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}  src='https://b.zmtcdn.com/data/pictures/chains/3/19056943/06029b048ef65a9180d3ab70f50c3f19.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*' alt="Card image cap" />
    <p className='m-0 p-0 px-2 rounded  ' style={{position:"absolute",top:"15px",background:"rgba(255,255,255,0.9)",fontSize:"10px"}}>3.0</p>
    <div class="card-body m-0 p-2">
        <p class="card-title text-wrap m-0 font-weight-bold text-truncate" style={{fontSize:"12px"}}>Spicy Chicken Pizza</p>
        <p className='text-secondary m-0 p-0'>Chandrika</p>
        <div className='d-flex justify-content-between align-items-center mt-1  mb-1'>
        <p className='m-0 p-0 text-danger'>₹220</p>
        <buttom className="bg-success text-light m-0 p-0 px-2 pb-1 rounded">≡</buttom>
    </div>
    </div>
</div>

  )
}

export default Comp_for_recom;