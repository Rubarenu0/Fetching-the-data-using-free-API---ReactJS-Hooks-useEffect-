import ReactDOM from 'react-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
function Userdemo(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
      .catch(error=>{
        console.log("If it is not loading,will be error message");
        setLoading(false);
      })
  },[]);
  if(loading){
    return <p>loading...</p>;
  }

  return(
    <div>
      <h1>List out the details in Api:</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>Id:{user.id}<br/>Name:{user.name},<br/>email:{user.email}<br/>Body:{user.body}</li>
          
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Userdemo/>,document.getElementById('root'));
export default Userdemo;

