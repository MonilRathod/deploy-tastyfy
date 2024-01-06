import React from 'react';
import { useContext} from 'react';
import {useHistory} from 'react-router-dom'
import DashboardProfile from "../Components/Dashboard/DashboardProfile"
import Navbar from "../Components/Navbar/Navbar"
import {UserContext} from '../Contexts/context';
import {VscCircleFilled} from 'react-icons/vsc'
import {FaTrademark} from 'react-icons/fa'

function Dashboard() {
  const {user} = useContext(UserContext);
  const history = useHistory();
  return (
    <>
    <div className="background" >
      <Navbar/>
      {JSON.stringify(user) !== '{}' && <DashboardProfile user={user}/>}
      <div className="footerP"> 
        <div>
          <span className="f-item" onClick={()=> history.push("/Guide")}> User Guide</span><VscCircleFilled/>
          <span className="f-item" onClick={()=> history.push("/About")}> About us</span><VscCircleFilled/>
          <span className="f-item" onClick={()=> history.push("/PrivacyPolicy")}>Privacy Policy</span>

          <hr style={{"width":"50%"}}/>
        </div>
        <div style={{"font-weight":"bolder", fontFamily:"Noteworthy", fontSize :"40px"}}> Tastefy <FaTrademark size={10} style={{marginBottom:"15px"}}/></div>
      </div>
      </div>
    </>
  )
}

export default Dashboard;



