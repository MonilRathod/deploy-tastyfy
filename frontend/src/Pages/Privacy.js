import Navbar from "../Components/Navbar/Navbar"
import { FcPrivacy } from "react-icons/fc";
function Privacy() {
    
    return (
      <>
      <div className="background" style={{height:"100vh"}}>
        <Navbar/>
        <div className="container" style={{"padding":"20px", "width":"40vw","margin-left":"30%","margin-top":"10%"}}>
        <h1> Privacy and Security</h1> <FcPrivacy size={30}/>
        <hr></hr>
        <p>
        To ensure privacy and security each user has to create a password for themselves at the time of registration and then for every further login that password is required and without authentication no user can login.</p>
 
       <p> Also no other user can see any details of any other user or manipulate them.</p>
 
        <p>if someone forgets password then the user can change the password only when he gets a “one time pin” via registered email and on entering the correct pin will allow to change password. </p>
 
        <p>This ensures that no random person can change the password of any user.</p>
       </div>
       </div>
      </>
    )
  }
  
  export default Privacy;