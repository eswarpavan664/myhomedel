import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

function StatusBar(props){
console.log(props.step)
  if(props.step!==6 && props.step!==5){
    return(
      <Steps direction="vertical" current={props.step} > 
  
      <Step title="Order Placed" description="Pending" />
      <Step title="Accepted By Restaurant" description="waiting Delivery boy" />
      <Step title="Accepted By Delivery Boy " description="waiting Delivery boy" />
      <Step title="Delivered" description="Done" />
       
    </Steps>
    )
  }
  else{
    return(
      <Steps direction="vertical" current={props.step-5} status="error"> 
  
      <Step title="Order Placed" description="Pending" />
      <Step title="Order Canceled" description={props.status} />
      
    </Steps>
    )
  }
};

export default StatusBar;