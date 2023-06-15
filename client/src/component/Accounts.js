import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Accounts = () => {

  const [user,setuser] = useState([])

  useEffect(()=>{
    fetch('https://backend-bankapp.onrender.com/accounts')
    .then(responsec => responsec.json())
    .then(data => setuser(data))
  },[])



  return (
    <div className="Bank_Accounts">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Account Number</th>
          <th>Correction</th>
          <th>Amount</th>
        </tr>
        {user.map((item,id)=>{
          return(<>
            <tr key={id}>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.account_number}</td>
          <td>Rs. +200</td>
          <td>{item.amount}</td>
          <button>Transfer</button>
        </tr>
          </>)
        })}
        
      </table>
    </div>
  );
};

export default Accounts;
