import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

const StatusBar = (props) => (
  <Steps direction="vertical" current={props.status} status={props.status===5 ||props.status===6?"error":"process"}> 
    <Step title="Order Placed" description="Pending" />
    {props.status===5 ||props.status===6? <Step title={props.status===5?"Canceled By Customer":"Canceled By Restaurant"} description="Canceled" />: <Step title="Accepted By Restaurant" description="waiting Delivery boy" />}
    {props.status===5 ||props.status===6? <Step title={props.status===5?"Canceled By Customer":"Canceled By Restaurant"} description="Canceled" />:    <Step title="Accepted By Delivery Boy " description="waiting Delivery boy" />}
    {props.status===5 ||props.status===6? <Step title={props.status===5?"Canceled By Customer":"Canceled By Restaurant"} description="Canceled" />:<Step title="Delivered" description="Done" />}       
  </Steps>
);

export default StatusBar;