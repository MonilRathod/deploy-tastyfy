import "./Dashboard.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { RiEdit2Line } from "react-icons/ri";

function Profile(props) {
  return (
    <div class="main_card">
    <div className="profile">
      <div className="bio">
        <div className="bionibaju">
        <div className="photobox">
          <img src="https://seventhqueen.com/themes/kleo/wp-content/uploads/rtMedia/users/44269/2020/07/dummy-profile.png"></img>
         </div>
          <h1>Username</h1>
          <span className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>113 followers</Button></a>
            </span>
            <span className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>123 following</Button></a>
            </span>
            {/* <span className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>Edit profile</Button></a>
            </span> */}
          </div>
          {/* <Button variant="outlined" style={{ "margin": "20px 175px" }}>
            <RiEdit2Line style={{ "margin-right": "8px" }} /> Edit Profile
          </Button> */}
        <div>
          {/* ahi lakhjo */}
         </div>
      </div>
      {/* bio ahiya pate che */}
      <div className="biobottom">
        <div className="data">
        <button className='profilebutton'>
        <a href="#">Saved Recipes</a>
        </button>
        </div>
        <div className="data">
        <button className='profilebutton'>
          <a href="#">Liked</a>
          </button>
        </div>
        <div className="data">
        <button className='profilebutton'>
          <a href="#">My recipes</a>
          </button>
        </div>
        <div className="data">
        <button className='profilebutton'>
          <a href="#">Upload recipe</a>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;