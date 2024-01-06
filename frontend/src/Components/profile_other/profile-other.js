import './profile-other.css';
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';



function ProfileOther() {
  return (
  <>  
 
<div class="bio-container">
  <div class="content">
  <img class="profile_pic" src="https://res.cloudinary.com/jorpdesigns/image/upload/v1533122246/profile-picture.jpg" alr="profile picture" />
  <div>
    <span class="username">deval_sonani_31</span>
    <span class="display-name">Deval Sonani</span>
    
  </div>
  <div class="bio">
    <p>Web Designer / Marvel Fan / Cricketer</p>
    <button class="follow">Follow</button>
  </div>  
  </div>
</div>  

<div class="account-stats">
  <div>
    <span class="account-stats-figure">6</span><span class="account-stats-category">posts</span>
  </div>  
  <div>
    <span class="account-stats-figure">948</span><span class="account-stats-category">followers</span>
  </div> 
  <div>
    <span class="account-stats-figure">150</span><span class="account-stats-category">following</span>
  </div>     
</div>  

<div class="posts-type-row">
  <div>
    <span class="my-posts">Upoaded Recipies</span>
  </div>
</div>  

<div class="instagram-post-grid">
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" />
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
</div>  
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</>
  );
}

export default ProfileOther;
