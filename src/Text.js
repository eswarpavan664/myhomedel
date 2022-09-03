import React,{useState,useEffect} from "react";
function App() {
  const [Data,setData] = useState([]);
  const [Name,setName] = useState();
  const [Id,setId] = useState();
  const [Address,setAddress] = useState();
  const [Phone,setPhone]= useState();

  useEffect(()=>{

    setInterval(() => {
      GetData();
     }, 2000)
    
   },[])
  const GetData=()=>{
    
    fetch('http://192.168.55.105:3000/GetStudentsData',{
      headers:new Headers({
        Authorization:"Bearer" 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
         
        
        setData(data)
             console.log(data);
         
      }
      )
  }
  const AddData=()=>{
    fetch("http://192.168.55.105:3000/addStudentData",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
        
       "Name":Name,
       "Id":Id,
       "Phoneno":Phone,
       "Address":Address

     })
    })
    .then(res=>res.json())
    setAddress("");
    setId("");
    setName("");
    setPhone("");
  }
  return (
    <div className="App">
       <h1>hello</h1>
        <input type="text"  value={Name} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text"  value={Id} placeholder="enter Id" onChange={(e)=>setId(e.target.value)}/>
        <input type="text"  value={Phone} placeholder="enter Phone" onChange={(e)=>setPhone(e.target.value)}/>
        <input type="text"  value={Address} placeholder="enter Address" onChange={(e)=>setAddress(e.target.value)}/>
       <button onClick={AddData}> ADD</button>
        {Data?<DisplayInTable Data={Data}/>:null

        }
    </div>
  );
}




function DisplayInTable(props){
  return(
    <div style={{width:"50%"}}>

<table class="table table-bordered">
  <thead>
  <tr>
      <th scope="col">S No.</th>
      <th scope="col">Name</th>
      <th scope="col">Reg Id</th>
      <th scope="col">Phone number</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>

       
{props.Data.map((data, key) => {
  return (
    
    <tr>
      <th scope="row">{key+1}</th>
      <th scope="row">{data.Name}</th>
      <th scope="row">{data.Id}</th>
      <th scope="row">{data.Phoneno}</th>
      <th scope="row">{data.Address}</th>

    </tr>
    
  )
})}
     
    
  </tbody>
</table>
    </div>
  )
}


export default App;
