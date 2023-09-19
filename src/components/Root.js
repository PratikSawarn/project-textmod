import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
export default function Root(props) {
  return (
    <>
    <Navbar title="TextUtils" mode={props.mode} toggleMode={props.toggleMode} customMode={props.customMode} color={props.color}/>
    <div className='container'><Outlet/></div>
    </>
  )
}
