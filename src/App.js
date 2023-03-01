import React from 'react';
import {Route,Routes} from "react-router-dom";
import LoginForm from './components/LoginForm';
import SingninForm from './components/SingninForm';
import Home from './components/Home';

export default function App() {
  return (
    <div className='m-0 p-0 w-full h-screen'>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/singnin" element={<SingninForm />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  )
}
