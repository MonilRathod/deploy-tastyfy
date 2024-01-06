import Navbar from "../Components/Navbar/Navbar"


function Guide() {
    
    return (
      <>
      <div className="background" style={{height:"135vh"}}>
        <Navbar/>
        <div className="container" style={{"padding":"20px", "width":"60vw","margin-left":"18%","margin-top":"5%"}}>
        <h1> User Guide</h1>
        <hr></hr>
        <h3> Search a Recipe</h3>
        <h4>1. Search by recipe name </h4>
        <p>
        Click on search bar<br/>
        Enter recipe name and it will automatically displayed on page 

        </p>
        <h4>2. Search from Search Page </h4>
        <p>
        Click on recipe page<br/>
        Select from filters<br/>
        Click on submit<br/>
		    <span style={{color:"red"}}>Note:</span> you can select multiple attributes
        </p>
        <hr/>
        <h3>
        Login
        </h3>
        <p>
        Click on Join now on top left<br/>
        Enter your username and password<br/>
        Click on the ‘Submit’ button.
        </p>
        <h3>If user is not registered :</h3>
        <p>
          Click on register  the user will be directed to the ‘Register’ page.<br/>
          Enter necessary details.<br/>
          Click on the ‘Submit’ button.<br/>
      
        </p>
        <hr/>
      <h3>
      Upload recipe <span style={{color:"Red"}}>(Login Required)</span>
      </h3>
      <p>
        Click on upload button<br/>
        Enter details of recipe.<br/>
        Select or create ingredients<br/> 
        Enter a link to your recipes image<br/>
        Click on  the ‘Upload’ button.<br/>

        </p>
        
       </div>
       </div>
      </>
    )
  }
  
  export default Guide;