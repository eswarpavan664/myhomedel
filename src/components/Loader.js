import React,{useEffect,useState} from 'react'


import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";
import Lodi from '../lotties/lf30_editor_dhwjzrvz.json'
import { RemoveAll } from './../screens/redux/actions';
import { connect } from 'react-redux';

import Loading from './../screens/Loading';

function Loader(props) {
    const {local_variable,RemoveAll} =props;
    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {

              
            console.log('internal error')   
        },5000);
        return () => clearTimeout(timer);
      }, []);
const [temp,settemp] =useState([1,1,1,1,1,1]);
  return (
    <>
    
               <div className='row justify-content-center '>
                    {temp.map(()=>(
                        <div className='col-md-4 mb-5'>
                    
                                        <Player
                                    autoplay
                                    loop
                                    src={Lodi}
                                    style={{ height: '300px', width: '300px' }}
                                    
                                >
                                
                                </Player>
                    </div>
                    ))

                    }
                     
           
                
               </div>
           


    </>
  )
}

const mapStateToProps = state =>({
    local_variable :state.item
  })

export default connect(mapStateToProps,{RemoveAll})(Loader);