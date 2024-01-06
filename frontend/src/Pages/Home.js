import React, { useContext, useState, useEffect} from 'react';
import Navbar from "../Components/Navbar/Navbar";
import SearchBox from "../Components/search-box/Search-Box";
import RecipeCard from '../Components/RecipeCard/RecipeCard';
import { RecipeContext } from '../Contexts/context';
import {VscCircleFilled} from "react-icons/vsc"
import { FaTrademark } from "react-icons/fa";
import "./Home.css"
import { Link , useHistory} from 'react-router-dom';


export default function Home() {

  const history= useHistory();

  const { recipes } = useContext(RecipeContext);

  const [rec, setRec] = useState([]);

  useEffect(() => {
    if(recipes.length !== 0){
      setRec(recipes);
    }
  }, [recipes])

  return (
    <>
      {console.log(rec)}
      <div className="background">
      <Navbar className="Nav" />
      {
        recipes.length !== 0 &&
        <div className="Home">
          <SearchBox recipes={recipes} setRec={setRec}/>
          <div className="">
            {rec.map(r => <RecipeCard r={r} />)}
          </div>
        </div>
      }
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
  );
}