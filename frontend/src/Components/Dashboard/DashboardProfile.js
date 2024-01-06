import "./Dashboard.css";
import Button from "@material-ui/core/Button";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function DashboardProfile({ user }) {
  return (
    <div class="main_card">
      <div className="profile">
        <div className="bio">
          <div className="bionibaju">
            <div className="photobox">
              <img style={{"border-radius":"100px"}}src="https://lh3.googleusercontent.com/ogw/ADGmqu_zu--WffN4JlWGzZ0pulY4v67ZMm7FTfhJIYJhiTA=s64-c-mo"></img>
            </div>
            <div className="NameCard">
            <h1>{user.user.name}</h1>
            <span className="bioicon">
             I am cooking enthusiast
            </span>

            </div>
            </div>
        </div>
      </div>



      <div className="content-center-dashboard">
        <div className="biobottom">
          <div>
            <h1 className="dmenu">Uploaded Recipes</h1>
            {user.uploaded.length !== 0
              &&
              user.uploaded.map(r => <RecipeCard r={r} />)
            }
          </div>
          <div>
            <h1 className="dmenu">Liked Recipes</h1>
            {user.liked.length !== 0 && user.liked[0] !== null &&
              user.liked.map(r => <RecipeCard r={r} />)
            }
          </div>
          <div>
            <h1 className="dmenu">Saved Recipes</h1>

            {user.saved.length !== 0 && user.saved[0] !== null
              &&
              user.saved.map(r => <RecipeCard r={r} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

