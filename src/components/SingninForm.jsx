import React,{useState} from 'react';
import Swal from 'sweetalert2';
import './style/SweetAlert.css';

export default function SingninForm() {

    const[userName , setUserName] = useState('');
    const[password , setPassword] = useState('');
    const[confirmPassword , setConfirmPassword] = useState('');

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
        }else if(confirmPassword.length === 0){
            Swal.fire({
                text:('Enter your confirm Password'),
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
                customClass:{
                    htmlContainer: 'text-white font-Urbanist uppercase',
                    popup: 'bg-zinc-900 rounded-none',  
                }
              })
        }else if(password != confirmPassword){
            Swal.fire({
                text:('The password is not the same'),
                icon: "error",
                showConfirmButton: false,
                timer: 3000,
                customClass:{
                    htmlContainer: 'text-white font-Urbanist uppercase',
                    popup: 'bg-zinc-900 rounded-none',  
                }
              })
        }else if(userName.length > 0 && password === confirmPassword){
            Swal.fire({
                icon: "success",
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
        singn in
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
            placeholder='password'
            value={password}
            onChange={(e) => {
              const result = e.target.value.replace(/\D/g, '');
              setPassword(result);
            }}
            />
            <input
            className='text-Urbanist uppercase text-2xl border-2 border-solid border-gray-300 p-2 outline-none bg-gray-100 w-3/12 rounded-md placeholder:text-gray-400'
            type='text'
            placeholder='confirm password'
            value={confirmPassword}
            onChange={(e) => {
              const result = e.target.value.replace(/\D/g, '');
              setConfirmPassword(result);
            }}
            />
            <button onClick={handleSubmit}
            className='text-Urbanist uppercase text-white text-3xl bg-sky-500 p-2 w-3/12 border rounded-md shadow hover:bg-sky-700'>
              Sing in
            </button>
      </form>
    </div>
  );
}
