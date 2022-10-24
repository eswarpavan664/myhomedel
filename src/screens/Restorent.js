/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
import ItemCard from '../components/ItemCard';
import '../css/Res.css'
import {useLocation} from 'react-router-dom'
import { Ip } from './../constants/Ip';
import { NavLink } from 'react-router-dom';
import { InAction,DeAction } from './redux/actions';
import { connect, Connect } from 'react-redux';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Dropdown, Menu } from 'antd';
import Load from '../lotties/112087-empty.json'
import Comp_for_home from '../components/Comp_for_home';
import Nav from './../components/Nav';
import '../css/Restorent.css'
import Recom from './../components/Recom';

 




function Restorent(props) {
    const {local_variable} =props;
    const location = useLocation()
  const { AdminId ,ShopName,Address,ShopPhoto,PhoneNumber,User,ShopType,Deliverycharges,DeliveryTime} = location.state
  
  const [Items,setItems] = useState([]);

   const [itemname,setitemname] = useState("All");

   const [VegOrNonveg,setVegOrNonveg]  =useState("All")
 
  const  GetData = async ()=>{
   //  const token = await  localStorage.getItem("token")
    // console.log("Dashboard = "+token)
   fetch(Ip+'/GetItems?id='+AdminId+"&itemname="+itemname+"&veg="+VegOrNonveg,{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
    setItems(data);
     
     console.log("items in restaurants = ",data);     
    
   }
   )
  }

const [AdminData,setAdminData]=useState();
  const GetResDetails=()=>{
    fetch(Ip+'/GetAdminForRes?id='+AdminId,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      
      .then(data=>{ 
      
         
        setAdminData(data[0])
        
        console.log("Admin = ",data[0]);     
       
      }
      )
  }

  useEffect(()=>{
    GetResDetails();
  })
useEffect(()=>{
 
  GetData();
 //console.log(check("Adminchandrika@gmail.comFired Rice"))
 
},[itemname,VegOrNonveg])


useEffect(()=>{
  setInterval(() => {
    GetData();
      }, 5000)
 
})
useEffect(()=>{
 
    GetData();
   //console.log(check("Adminchandrika@gmail.comFired Rice"))
   if(!done){
      console.log("done")
      
   }
  },[])


  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a  onClick={()=>setitemname("Biryani")}>
               Biryani
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  onClick={()=>setitemname("Rice")}>
               Rice
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a  onClick={()=>setitemname("Juice")}>
               Juice
            </a>
            
          ),
        },
        {
          key: '4',
          label: (
            <a  onClick={()=>setitemname("Starters")}>
               Starters
            </a>
            
          ),
        },
 
      ]}
    />
  );





  const GroceryMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a  onClick={()=>setitemname("Soaps")}>
               Soaps
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  onClick={()=>setitemname("Rice")}>
               Rice
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a  onClick={()=>setitemname("Oils")}>
               Oils
            </a>
            
          ),
        },
        {
          key: '4',
          label: (
            <a  onClick={()=>setitemname("Books")}>
               Books
            </a>
            
          ),
        },
 
      ]}
    />
  );



  const VeggiesMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a  onClick={()=>setitemname("Leafy Veggies")}>
               Leafy Veggies
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  onClick={()=>setitemname("Veggies")}>
               Veggies
            </a>
          ),
        },
        
 
      ]}
    />
  );


  const MeatMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a  onClick={()=>setitemname("Fishes")}>
               Fishes
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  onClick={()=>setitemname("Chicken")}>
               Chicken
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a  onClick={()=>setitemname("Prawns")}>
               Prawns
            </a>
            
          ),
        },
        {
          key: '4',
          label: (
            <a  onClick={()=>setitemname("Crabs")}>
               Crabs
            </a>
            
          ),
        },
 
      ]}
    />
  );



  
  const FreshMenu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a  onClick={()=>setitemname("Milk")}>
               Milk
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  onClick={()=>setitemname("Tea")}>
               Tea
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a  onClick={()=>setitemname("Coffee")}>
               Coffee
            </a>
            
          ),
        },
        {
          key: '4',
          label: (
            <a  onClick={()=>setitemname("Ice Cream")}>
               Ice Creams
            </a>
            
          ),
        },
 
      ]}
    />
  );


 localStorage.setItem('deliverycharges',Deliverycharges)
     
const [done,setdone] =useState(false);
  //console.log(local_variable)

function check(name) {
    const { length } = local_variable;
    const id = length + 1;
    const found = local_variable.some(el => el.ItemId ===name);
    if (!found)  
    {
        return false;
    }
    else{
        return true;
    } 
  }
 
//console.log("Item == ",local_variable);

console.log(ShopType)

//STATE
const [isRadio, setIsRadio] = useState(5);

// HANDLE THE ONCHANGE HERE
 

const handleChange = (e) => {
  // string passed in
  // a string returned by default
  console.log(e.currentTarget.value);
  // add + to the event to make the value a number
  setIsRadio(+e.currentTarget.value);
};




  return (
    <div>
    <Nav/>
        <div className='container-fluid m-0 p-0'>

            <Card shoptype={ShopType} charges={Deliverycharges} time={DeliveryTime} name={ShopName} addr={Address} photo={ShopPhoto}/>
        </div>
        <div className='container mt-2'>

            {/*<div className='row mt-5'>
                <div className='col-6 col-md-3'>
                    <h2>{ShopName}</h2>
                </div>

                <div className='col-6 col-md-2 ml-auto text-center'>
                    <div className='d-flex align-items-center'>
                        <p className='review_rating m-0 mr-2'>4.3<i class="fa-solid fa-star"></i></p>
                        <div className='m-0'>
                            <p className='m-0'>546</p>
                            <p className='m-0 font-weight-light review_rating_somethig'>Somethig</p>
                        </div>
                    </div>
                </div>
            </div>*/}

          { /* <div>
                 {ShopType==="Restaurant"?<p className='font-weight-light m-0'>Biryani, Fast Food, Pizza,Curry,Chicken</p>:null}
                 {ShopType==="Meet Shop"?<p className='font-weight-light m-0'>Chicken, Fish, Prawns, Crabs</p>:null}
                 {ShopType==="Medical"?<p className='font-weight-light m-0'>All Medical Tablets</p>:null}
                 {ShopType==="Vegetable Shop"?<p className='font-weight-light m-0'>All Vegetables</p>:null}
                 {ShopType==="Grocery"?<p className='font-weight-light m-0'>Oils,Soaps,and etc</p>:null}
                <p className='font-weight-light m-0'>{Address}</p>
                <div className='col-12 fw-bold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                </svg>Delivery Charges:-  { Deliverycharges?Deliverycharges:10}
                                    </div>
                <p className='font-weight-light m-0'><span className='text-danger'>Delivery Time:-</span> {DeliveryTime?DeliveryTime:"30 min"} </p>
            </div>*/}
            
            {/*<div className='buttonGroup'>
                <button className='btn btn-danger m-2'><i class="fa-regular fa-star"></i> Add Review</button>
                <button className='btn btn-outline-danger m-2'>Direction</button> 
                <button className='btn btn-outline-danger m-2'>Bookmark</button> 
                <button className='btn btn-outline-danger m-2'>Share</button> 
            </div>*/}
            <hr/>
            <div className='row'>
               {/* <div className='col-md-3'>
                    <ul>
                        <li>Recommended</li>
                        <li>Rice And Biryani</li>
                        <li>Desert</li>
                    </ul>
                </div>*/}
                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h3 className='font-weight-light'>Order Online</h3>
                           
                        </div>
                        <div className='col-md-6 ml-auto d-none d-md-block'>
                           {/* <input className='form-group' value={itemname} onChange={(e)=>setitemname(e.target.value)} placeholder='Search' style={{border:"none",boxShadow:"0 0 10px 0 lightgray"}} />*/}
                        </div>
                    </div>
                   {ShopType==="Restaurant"?
                   <div className='col'>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio" value={VegOrNonveg} onChange={(e)=>setVegOrNonveg("All")} />All
                        </label>
                      </div>
                    <div class="form-check-inline">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio"  value={VegOrNonveg} onChange={(e)=>setVegOrNonveg("Veg")}/>Veg
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="optradio" value={VegOrNonveg} onChange={(e)=>setVegOrNonveg("Non Veg")}/>Non-Veg
                        </label>
                      </div>
                    </div>:null

                   }
          
                    <h3>Recommended</h3>
                     {Items.length===0?

                     <div>
                              <Player
                                autoplay
                                loop
                                src={Load}
                                style={{ height: '300px', width: '300px' }}
                            >
                            
                            </Player>

                     </div>
                     :
                     <div className='row'>
                         {Items.map((item)=> (
                         
                         
                            <ItemCard   
                                     ItemName={item.ItemName}
                                      ItemPrice={item.ItemPrice} 
                                       ProductImage={item.ProductImage}
                                        ShopId={item.ShopId} 
                                        ShopName={item.ShopName} 
                                        id={item._id}
                                         ItemDiscription={item.ItemDiscription}
                                         ItemId={item.ItemId}  
                                         DiscountPrice={item.DiscountPrice}
                                         adminId={AdminId}
                                         ItemStatus={item.ItemStatus}
                                         Cart={check(item.ItemId)}
                                         /> 
                         ))

                         }
                    </div>

                     }
          

         
                </div>
            </div>



                                        
       

        </div>

        <div style={{paddingBottom:"120px"}}>
           {local_variable.length>0? 


           
           
                    <NavLink to="/Payment"
                
                        
                        >
                              <div style={{borderTop:"1px solid lightgreen",position:"fixed",bottom:"55px",left:"0",width:"100%",height:"auto",backgroundColor:"white",zIndex:"10"}} className="p-2">
                                <div className='container-fluid m-0 p-0'>
                                    <div className='row align-items-center text-center'>
                                        <div className='col-4 text-success'>
                                            <p className='m-0'>{local_variable.length}</p>
                                            <p className='m-0'>Added</p>
                                        </div>
                                        <div className='col-5'>
                                        <div className='btn btn-outline-success remove'  >Continue</div>
                                         
                                        </div>
                                        
                                    </div>

                                     </div>
                            </div>
                    </NavLink>
                    :
                    null
            
           }
           <div className='text-center' style={{position:"fixed",bottom:local_variable.length>0?'120px':'75px',width:"100%"}}>

           <Dropdown overlay={ShopType==="Restaurant"?menu:ShopType==="Meet Shop"?MeatMenu:ShopType==="Grocery"?GroceryMenu:ShopType==="Vegetable Shop"?VeggiesMenu:ShopType==="Fresh"?FreshMenu:null} placement="top" arrow={{ pointAtCenter: true }}>
                <Button style={{backgroundColor:'green',borderRadius:8,color:'white',fontSize:15}}>Menu</Button>
          </Dropdown>
          </div>
         </div> 
         <Comp_for_home/>
    </div>
  )
}



function Card(props){
  return(
    <div class="card ">
    <img class="card-img-top img-fluid" src={props.photo?props.photo:"https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2975%2Ftrend20201030124515.jpg"} style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} alt={"Card image cap"} width="150" />
    <div class="card-body">
      <h5 class="card-title text-success">{props.name}</h5>
      {props.shoptype==="Restaurant"?<p className='font-weight-light m-0'>Biryani, Fast Food, Pizza,Curry,Chicken</p>:null}
{props.shoptype==="Meet Shop"?<p className='font-weight-light m-0'>Chicken, Fish, Prawns, Crabs</p>:null}
{props.shoptype==="Medical"?<p className='font-weight-light m-0'>All Medical Tablets</p>:null}
{props.shoptype==="Vegetable Shop"?<p className='font-weight-light m-0'>All Vegetables</p>:null}
{props.shoptype==="Grocery"?<p className='font-weight-light m-0'>Oils,Soaps,and etc</p>:null}

      <div className='row text-center text-success'>
        <div className='col-4'>
            <div className='row'>
              <div className='col-12 fw-bold'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
<path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg> {props.charges?props.charges:10}
              </div>
              <div className='col-12 font-weight-light'>
              <p className='ms-1 text-dark fw-bold ' style={{fontSize:"12px"}}>Delivery</p>
              </div>
            </div>
        </div>
        <div className='col-4'>
        <div className='row'>
        <div className='col-12 fw-bold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
</svg> {props.time?<span>{props.time} min</span> :  <span>30 min</span> }
              </div>
              <div className='col-12 font-weight-light'>
              <p className='text-dark fw-bold ms-1' style={{fontSize:"12px"}}>Time</p>
              </div>
            </div>
        </div>
        <div className='col-4'>
        <div className='row'>
        <div className='col-12 fw-bold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> 4.3
              </div>
              <div className='col-12 font-weight-light'>
                <p className='text-dark fw-bold' style={{fontSize:"10px"}}>(200+ Review)</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
const mapStateToProps = state =>({
    local_variable :state.item
  })
export default connect(mapStateToProps,{InAction,DeAction})(Restorent);