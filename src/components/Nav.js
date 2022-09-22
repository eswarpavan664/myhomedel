/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Logo from '../images/logo.jpeg'
import { NavLink } from 'react-router-dom';
import cart from '../images/shopping-cart.png'
import '../css/Navstyle.css'

import { InAction,DeAction ,RemoveAll,QuantityAdd} from './../screens/redux/actions';
import { connect, Connect } from 'react-redux';
function Nav(props) {

  const {local_variable,DeAction,RemoveAll,QuantityAdd} =props;
  return (
    <div style={{borderBottom:"3px solid gray",position:"sticky",top:"0",width:"100%",backgroundColor:"white",zIndex:"2",height:"auto"}}>
        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
            <div>
              <NavLink
              to="/MainPage"
              > 
                <img src={Logo} className="img-fluid" width={"50"}  />
              </NavLink>
            </div>
            <div>
            <h4 class="" href="#">My Homedel</h4>
            </div>
            <div>
            <ul class=" ml-md-auto mt-2" style={{courser:'pointer'}}>
          
              <img src={cart} className='img-fluid' width={"30"} />
              <i class="fa badge fa-lg" value={local_variable.length}>&#xf290;</i>
            </ul>
            </div>
        </nav>
    </div>
  )
}


const mapStateToProps = state =>({
  local_variable :state.item
})

export default connect(mapStateToProps,{InAction,DeAction,RemoveAll,QuantityAdd})(Nav);