import { useEffect, useState } from "react";
import React from "react";

const Transfer = () => {

  const [user,setuser] = useState([])
  const [from,setfrom] = useState()
  const [to,setto] = useState()
  const [amount,setamount] = useState()
  const [formdata,setformdata] = useState()

  useEffect(()=>{
    fetch('https://backend-bankapp.onrender.com/addaccount')
    .then(responsec => responsec.json())
    .then(data => setuser(data))
  },[])

  const sendMoney = (e) =>{
    e.preventDefault();

    fetch('https://backend-bankapp.onrender.com/transcation',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({'From':from,'To':to,'Amount':amount})
    })
  }

  return (
    <form className="Transcation" onSubmit={sendMoney}>
      <h3>Transfer Your Money</h3>
      <div className="dropbox">
        <h2>From : {from}</h2>
        <select 
        value={from}
        onChange={e => setfrom(e.target.value)} 
        >
        {user.map((item,uid)=>{
          return (
            <>
            <option key={item._id} value={item.account_number}>{item.username}</option>
            </>
          )
        })}
        </select>

        <h2>To : {to} </h2>
        <select value={to} onChange={e => setto(e.target.value)}>
        {user.map((item,uid)=>{
          return (
            <>
            <option key={item._id} value={item.account_number}>{item.username}</option>
            </>
          )
        })}
        </select>
      </div>

      <div className="lower">
      <h2>Enter the Amount : </h2>
      <input type="number" placeholder="Amount" onChange={e => setamount(e.target.value)}/>

      <button>Transfer</button>
      </div>  
      
    </form>
  );
};

export default Transfer;
