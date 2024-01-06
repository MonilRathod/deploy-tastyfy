import Navbar from "../Components/Navbar/Navbar"
import {FaTrademark} from "react-icons/fa"
function About() {
    
    return (
      <>
      <div className="background" style={{height:"150vh"}}>
        <Navbar/>
        <div className="container" style={{"padding":"20px", "width":"40vw","margin-left":"30%","margin-top":"10%"}}>
        <h1> About us</h1>
        <hr></hr>
        <p>Many people look for “what to cook ?” or “How to cook something?” on the internet, or they want to share his/hers findings with the world. This software will help all those people who want an answer to all those questions easily and Share their talents related to cooking with the world on the same platform. Here users can easily search for recipes with different search methods mentioned. Also If someone tries out new recipes at home and finds them too delicious, He or She can share them with the community so anyone around the world can cook the same thing: the local delicacy of the town over the seas. 
       </p>
        <hr style={{width:"50%"}}/>
        <div style={{"text-align":"center"}}>
          <h2>Our Team</h2>
          <h4 style={{fontWeight:"normal"}}>
            GAMIT JITESHKUMAR<br/>
            PARASKAR KUNJ JAYESHBHAI<br/>
          	SONANI DEVAL ARVINDBHAI<br/>
           	MEETKUMAR NATVARBHAI SALVI<br/>
          	KORADIA MITESH HITESHBHAI<br/>
          	GAJERA DEEP NALINKUMAR<br/>
          	AGRAWAL VATSAL DEVENDRABHAI<br/>
          	BHAVSAR RAJ DIPAKKUMAR<br/>
          	NIKHIL DINESH MEHTA<br/>
          	GAMI DHYEY KANTIBHAI<br/>
          </h4>
          <div style={{"font-weight":"bolder", fontFamily:"Noteworthy", fontSize :"40px"}}> Tastefy <FaTrademark size={10} style={{marginBottom:"15px"}}/></div>
        </div>
       </div>
       </div>
      </>
    )
  }
  
  export default About;