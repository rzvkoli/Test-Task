import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center gap-10 pt-24 bg-gray-100'>
      <h1  className='text-Urbanist uppercase text-5xl text-sky-500'>
        home
      </h1>
      <p className='text-4xl'>
        wellcome to home page
      </p>
      <button
      onClick={() => navigate('/')}
      className='text-Urbanist uppercase text-white text-3xl bg-sky-500 p-2 w-3/12 border rounded-md shadow hover:bg-sky-700'
      >
          Exit
      </button>
    </div>
  );
}
