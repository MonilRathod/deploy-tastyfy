import React from 'react';
import Navbar from "../Components/Navbar/Navbar"
import ResetPassword from "../Components/ResetPassword/ResetPassword"

function ForgetPassword() {
  return (
    <>
    <div className="background" style={{height:"100vh"}}>
      <Navbar />
      <ResetPassword />
      </div>
    </>
  )
}


export default ForgetPassword;