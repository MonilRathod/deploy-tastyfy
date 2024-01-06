import React from 'react';
import Upload from "../Components/Upload_Recipe/upload"
import {withRouter,Link} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5'
function UploadRecipe() {
  return (
    <>
    <div className="background" style={{height:"1600px"}}>
    <Link to='/' className='navbar-logo' style={{marginLeft:"45vw"}}> Tastefy <IoArrowBack size={30} style={{marginLeft:"30px"}}/></Link>
      <Upload />
    </div>
    </>
  )
}

export default withRouter(UploadRecipe);

