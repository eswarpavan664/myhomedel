/* eslint-disable react/jsx-pascal-case */
import React,{useEffect,useState} from 'react'
import Comp_for_recom from './Comp_for_recom';
import { Ip } from './../constants/Ip';

function Recom(props) {
  const [Restaurents,setRestaurents] = useState([]);

   
  const place = "bhimavaram";
  const  GetData = async ()=>{
   //  const token = await  localStorage.getItem("token")
    // console.log("Dashboard = "+token)
   fetch(Ip+'/GetRestorents?id='+props.Place,{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
    setRestaurents(data);
     
    console.log("data = ",data);
    
    
   }
   )
}

useEffect(()=>{
   GetData();
   
},[])
  return (
    <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row mx-1 py-2'>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1 d-md-block d-none'>
                <Comp_for_recom />
              </div>
            
            </div>
          </div>

          <div class="carousel-item">
          <div className='row mx-1 py-2'>
          <div className='col-md-3 col-4 m-0 px-1 '>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1 d-md-block d-none'>
                <Comp_for_recom />
              </div>
            </div>
          </div>
          
          <div class="carousel-item">
          <div className='row mx-1 py-2'>
          <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1'>
                <Comp_for_recom />
              </div>
              <div className='col-md-3 col-4 m-0 px-1 d-md-block d-none'>
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