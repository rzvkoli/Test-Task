import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import './style/SweetAlert.css';

export default function App() {

  const[userName , setUserName] = useState('');
  const[password , setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName.length === 0){
      Swal.fire({
        text:('Enter your username'),
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        customClass:{
            htmlContainer: 'text-white font-Urbanist uppercase',
            popup: 'bg-zinc-900 rounded-none',  
        }
      })
    }else if(password.length === 0){
      Swal.fire({
        text:('Enter your password'),
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        customClass:{
            htmlContainer: 'text-white font-Urbanist uppercase',
            popup: 'bg-zinc-900 rounded-none',  
        }
      })
    }else if(userName === 'abcd' && password === '1234'){
      navigate("/home")
    }else{
      Swal.fire({
        text:('The username or password is incorrect'),
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        customClass:{
            htmlContainer: 'text-white font-Urbanist uppercase',
            popup: 'bg-zinc-900 rounded-none',  
        }
      })
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-start items-center gap-10 pt-24 bg-gray-100'>
      <h1 className='text-Urbanist uppercase text-5xl text-sky-500'>
        Login
      </h1>
      <form className='flex flex-col justify-center items-center gap-5 w-full' onSubmit={handleSubmit}>
        <input
        className='text-Urbanist uppercase text-2xl border-2 border-solid border-gray-300 p-2 outline-none bg-gray-100 w-3/12 rounded-md placeholder:text-gray-400'
        type='text'
        placeholder='user name'
        value={userName}
        onChange={(e) => {
          const result = e.target.value.replace(/[^a-z]/gi, '');
          setUserName(result);
        }}
        />
        <input
        className='text-Urbanist uppercase text-2xl border-2 border-solid border-gray-300 p-2 outline-none bg-gray-100 w-3/12 rounded-md placeholder:text-gray-400'
        type='text'
        placeholder='user password'
        value={password}
        onChange={(e) => {
          const result = e.target.value.replace(/\D/g, '');
          setPassword(result);
        }}
        />
        <button
        onClick={handleSubmit}
        className='text-Urbanist uppercase text-white text-3xl bg-sky-500 p-2 w-3/12 border rounded-md shadow hover:bg-sky-700'
        >
          Login
        </button>
      </form>
      <button className='text-Urbanist uppercase text-sky-500' onClick={() => navigate("/singnin")}>
        singn in
      </button>
    </div>
  );
}