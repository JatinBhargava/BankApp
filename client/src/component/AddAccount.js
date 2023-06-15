import React, { useState } from 'react'

let account_number = 100000;
let _id = 1; 

const AddAccount = () => {

  const [user,setuser] = useState('')
  const [username,setusername] = useState('')
  const [email,setemail] = useState('')
  const [amount,setamount] = useState('')


  const addUser = async (e) =>{

    e.preventDefault();

    const response = fetch('https://backend-bankapp.onrender.com/addaccount',{
    method : 'POST',
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({
      _id : _id++,
      username,
      email,
      amount,
      account_number : account_number++})
   })
   .then(res => res.json())
   .then(data => console.log(data))
  }

  return (
    <form className='Form' onSubmit={addUser}>
        <h3 className='Heading'>Add Your Account </h3>
        <input type="text" placeholder='Name' value={username} onChange={e => setusername(e.target.value)} />
        <input type="text" placeholder='Email' value={email} onChange={e=> setemail(e.target.value)} />
        <input type="number" placeholder='Amount' value={amount} onChange={e => setamount(e.target.value)} />
        <button>Add User</button>
    </form>
  )
}

export default AddAccount