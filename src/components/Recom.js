/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Comp_for_recom from './Comp_for_recom';

function Recom() {
  return (
    <div className='container mt-3'>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row'>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 d-md-block d-none'>
                <Comp_for_recom />
              </div>
            
            </div>
          </div>
          <div class="carousel-item">
          <div className='row'>
          <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 d-md-block d-none'>
                <Comp_for_recom />
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div className='row'>
          <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 d-md-block d-none'>
                <Comp_for_recom />
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
          <span class="carousel-control-prev-icon" aria-hidden="true" style={{borderRadius:"50%",outline:"black",background:"rgba(0, 0, 0, 0.3)", border: "1px solid black",backgroundSize: "100%, 100%"}}></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true" style={{borderRadius:"50%",outline:"black",background:"rgba(0, 0, 0, 0.3)", border: "1px solid black",backgroundSize: "100%, 100%"}}></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
</div>
  )
}

export default Recom;