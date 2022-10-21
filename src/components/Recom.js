/* eslint-disable react/jsx-pascal-case */
import React,{useEffect,useState} from 'react'
import Comp_for_recom from './Comp_for_recom';
import { Ip } from './../constants/Ip';
import '../css/Rescomed.css'
function Recom(props) {
  const [Items,setItems] = useState([]);

  const [reco1,serreco1]=useState([]);
  const [reco2,serreco2]=useState([]);
  const [reco3,serreco3]=useState([]);
  
   
  const place = "";
  const  GetData = async ()=>{
   //  const token = await  localStorage.getItem("token")
    // console.log("Dashboard = "+token)
   fetch(Ip+'/GetAllItems',{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
    setItems(data);
     
    console.log("dfhdbsfhbdsfbsdmbfn = ",data);
    
    
   }
   )
}

useEffect(()=>{
   GetData();
   
},[])

 
  return (
    <section>
    <div class="image-slider">
      <div class="image-slider-track">
          {Items.slice(0,6).map((da,i)=>(
            <div className='slidde'>
                 <Comp_for_recom  data={da}/>
          </div>
          ))

          }

          {Items.slice(0,6).map((da,i)=>(
            <div className='slidde'>
                 <Comp_for_recom  data={da} />
          </div>
          ))

          }
      </div>
    </div>
    </section>
  )
}



 

export default Recom;