/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable import/first */
  
  import React, { useState,useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
 
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import AddItems from '../../components/AddItems';  
import Orders from '../../components/Orders';
import MyItems from './MyItems';
import { Ip } from './../../constants/Ip';
  
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

  
function Dashboard(){
  const [collapsed, setCollapsed] = useState(false);
  const [screen,setscreen] = useState("DashBoard");


  let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }

  const [UserData,setData] = useState("")
 
  const  GetData = async ()=>{
     const token = await  localStorage.getItem("token")
     console.log("Dashboard = "+token)
   fetch('http://'+Ip+':5000/GetAdmin',{
   headers:new Headers({
     Authorization:"Bearer "+token
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
     setData(data);
     
          console.log(data);
    
   }
   )
  }
useEffect(()=>{
 
  GetData();

},[])
  return (
    <> 
     {UserData.Role==="Admin"?

     <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
         
          <Menu.Item   onClick={()=>setscreen("DashBoard")}   >
               
            </Menu.Item>
            <Menu.Item   onClick={()=>setscreen("DashBoard")}   >
               
               </Menu.Item>
            <Menu.Item key="1" onClick={()=>setscreen("DashBoard")} icon={ <PieChartOutlined />}>
                DashBoard
            </Menu.Item>

            <Menu.Item key="2" onClick={()=>setscreen("Profile")} icon={ <PieChartOutlined />}>
                    Profile
            </Menu.Item>

            <Menu.Item key="5" onClick={()=>setscreen("MyItems")} icon={ <PieChartOutlined />}>
                     My Items
            </Menu.Item>

            <Menu.Item key="3" onClick={()=>setscreen("Add Items")} icon={ <PieChartOutlined />}>
                    Add Items
            </Menu.Item>

            <Menu.Item key="4" onClick={()=>setscreen("Orders")} icon={ <PieChartOutlined />}>
                 Orders
            </Menu.Item>

           
          </Menu>

        </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <ConTent page={screen} data={UserData}/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    
     :
             <div>

                <h1>Admin error:- your are not an admin and you don't have any credential in this website . Please contact our Admins to get Access (eswarpavan5237@gmail.com)</h1>
                <button onClick={logout}>go back</button>
          </div>


}  

    
    </>
  );

     
}  
    


function ConTent(props)
{
    
  let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }

  if(props.page==="DashBoard"){
    return(
      <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 360,
      }}
    >
       <div>
       <h1>Dashboard</h1>
       
        
      </div>
    </div>
    )
  }
  if(props.page==="Profile")
  {
    return(
      <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 360,
      }}
    >

      <img src={"http://"+Ip+":5000/"+props.data.ShopPhoto} />
      <h1>
        Name:- {props.data.Name}
      </h1>
      <h1>
        Shop Name:- {props.data.ShopName}
      </h1>
      <h1>
        Email:- {props.data.email}
      </h1>
      <h1>
        Phone No :- {props.data.PhoneNumber}
      </h1>
      <h1>
        Address :- {props.data.AdminId}
      </h1>
      <button onClick={logout}>logout</button>
        
       
    </div>
    )
  }
  if(props.page==="Add Items")
  {
    return(
      
   <AddItems id={props.data.AdminId} ShopName={props.data.ShopName}/>
    )
  }
  if(props.page==="Orders")
  {
    return(
      <Orders id={props.data.AdminId}/>
    )
  }
  if(props.page==="MyItems")
  {
    return(
      <MyItems id={props.data.AdminId}/>
    )
  }
  }
  
  export default Dashboard;

  /*<div>
          <h1>{props.Role.Role}</h1>
          <button onClick={logout}>Logout</button> 
          
        </div>*/