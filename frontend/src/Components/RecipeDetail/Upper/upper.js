import React, { useState } from 'react';
import Classes from './upper.module.css';
import { MdTimer } from 'react-icons/md'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdPlaylistAdd, MdPlaylistAddCheck } from 'react-icons/md'


function Upper({ Rec }) {
  let NLikes = Rec.numberOflike;//Number of Likes
  let VegStatus = (Rec.category === "Veg") ? true : false;
  let vegi = "#03550f"; // Veg or Nonveg tag
  if (!VegStatus) {
    vegi = "#930000";
  }
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className={Classes.Background}>
      
      <div className={Classes.Left}>
            <p className={Classes.Display}>{Rec.title}</p>

            <svg id="Veg-Nonveg-Logo" className={Classes.VegNonLogo} width="21" height="21" viewBox="0 0 21 21">
              <g id="Rectangle_3" data-name="Rectangle 3" fill="none" stroke={vegi} stroke-width="2.1">
                <rect width="21" height="21" rx="3" stroke="none" />
                <rect x="1.05" y="1.05" width="18.9" height="18.9" rx="1.95" fill="none" />
              </g>
              <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(4 4)" fill={vegi} stroke={vegi} stroke-width="1">
                <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
                <circle cx="6.5" cy="6.5" r="6" fill="none" />
              </g>
            </svg>

            <p className={Classes.TimeCook}><MdTimer size={30} /> {Rec.preparationTime} minutes</p>
      </div>

      <div className={Classes.Middle}>
          <p className={Classes.tag}> {Rec.mealType} </p>
          <p className={Classes.tag}> {Rec.cuisine} </p>
          <p> By ~ {Rec.chefname} </p>
      </div>

      <div className={Classes.PhotoContainer}>
          <img class="upper_img" style={{ width: "75%", height: "95%" }} src={Rec.picURL}></img>
      </div>
    </div>
  );
}

export default Upper;
