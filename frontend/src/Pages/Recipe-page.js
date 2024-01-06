import React, { useState, useEffect, useContext } from 'react'
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail"
import "./Recipe-page.css"
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdPlaylistAdd, MdPlaylistAddCheck, MdShare } from 'react-icons/md'
import Navbar from "../Components/Navbar/Navbar"
import { useLocation } from 'react-router-dom';
import { UserContext, UserDispatchContext } from '../Contexts/context';
import axios from 'axios';

export default function RecipePage() {

  const location = useLocation();
  const Rec = location.state;

  const { user } = useContext(UserContext);
  const { setU } = useContext(UserDispatchContext);

  const [isLiked, setIsliked] = useState(false);
  const [isSaved, setIssaved] = useState(false);

  useEffect(() => {
    if (JSON.stringify(user) !== '{}') {
      let l1 = false;
      for (let i = 0; i < user.user.lik.length; i++) {
        if (user.user.lik[i] === Rec._id) {
          l1 = true;
          break;
        }
      }
      if (l1 === true) {
        setIsliked(true);
      }
      let l2 = false;
      for (let i = 0; i < user.user.sav.length; i++) {
        if (user.user.sav[i] === Rec._id) {
          l2 = true;
          break;
        }
      }
      if (l2 === true) {
        setIssaved(true);
      }
    }
  }, []);

  const handlelike = () => {
    if (JSON.stringify(user) !== '{}') {
      let exu = user;
      const body = {
        _id: Rec._id
      };
      const auth = localStorage.getItem('auth-token');
      axios
        .put(`https://backend-tastyfy.onrender.com/recipe/like`, body, {
          headers: { 'auth-token': auth }
        })
        .then((res) => {
          if (res.data.ok === true) {
            console.log(res.data.ok);
            if (isLiked) {
              let idx1 = exu.user.lik.indexOf(Rec._id);
              if (idx1 > -1) {
                exu.user.lik.splice(idx1, 1);
              }
              let idx2 = -1;
              for (let j = 0; j < exu.liked.length; j++) {
                if (exu.liked[j]._id === Rec._id) {
                  idx2 = j;
                  break;
                }
              }
              if (idx2 > -1) {
                exu.liked.splice(idx2, 1);
              }
              setU(exu);
              setIsliked(false);
            } else {
              exu.user.lik.push(Rec._id);
              exu.liked.push(Rec);
              setU(exu);
              setIsliked(true);
            }
          } else {
            alert(res.data.err);
          }
        }
        )
        .catch(err => alert(err));
    } else {
      alert('Please login');
    }
  }

  const handlesave = () => {
    if (JSON.stringify(user) !== '{}') {
      let exu = user;
      const body = {
        _id: Rec._id
      };
      const auth = localStorage.getItem('auth-token');
      axios
        .put(`https://backend-tastyfy.onrender.com/recipe/save`, body, {
          headers: { 'auth-token': auth }
        })
        .then((res) => {
          if (res.data.ok === true) {
            console.log(res.data.ok);
            if (isSaved) {
              let idx1 = exu.user.sav.indexOf(Rec._id);
              if (idx1 > -1) {
                exu.user.sav.splice(idx1, 1);
              }
              let idx2 = -1;
              for (let j = 0; j < exu.saved.length; j++) {
                if (exu.saved[j]._id === Rec._id) {
                  idx2 = j;
                  break;
                }
              }
              if (idx2 > -1) {
                exu.saved.splice(idx2, 1);
              }
              setU(exu);
              setIssaved(false);
            } else {
              exu.user.sav.push(Rec._id);
              exu.saved.push(Rec);
              setU(exu);
              setIssaved(true);
            }
          } else {
            alert(res.data.err);
          }
        }
        )
        .catch(err => alert(err));
    } else {
      alert('Please login');
    }
  }

  return (
    <>
    <div className="background" style={{height:"120%"}}>
      <Navbar />
      <div className="container">
        <RecipeDetail Rec={Rec} />
        <div className="Actions">
          <div className="rAction" onClick={handlelike}>
            {
              isLiked ? <FcLike size={25} /> : <FcLikePlaceholder size={25} />
            }
          </div>
          <div className="rAction" onClick={handlesave}>
            {
              isSaved ? <MdPlaylistAddCheck size={25} /> : <MdPlaylistAdd size={25} />
            }
          </div>
          <div className="rAction">
            <MdShare /> Share
          </div>
          <div className="rAction">
            Share your Views
            <input type="text" placeholder="Share your views for this recipe" className="review-input"></input>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

