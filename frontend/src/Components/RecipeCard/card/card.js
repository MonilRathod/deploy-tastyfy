import React, { useState, useEffect, useContext } from 'react';
import Avatar from '../avatar/avatar';
import Classes from './card.module.css';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdPlaylistAdd, MdPlaylistAddCheck, MdShare, MdOpenInNew } from 'react-icons/md'
import { Redirect, Link, useHistory } from 'react-router-dom';
import { UserContext, UserDispatchContext } from '../../../Contexts/context';
import axios from 'axios';

export default function Card({ r }) {
    const history = useHistory();

    const { user } = useContext(UserContext);
    const { setU } = useContext(UserDispatchContext);

    const [isLiked, setIsliked] = useState(false);
    const [isSaved, setIssaved] = useState(false);

    useEffect(() => {
        if (JSON.stringify(user) !== '{}') {
            let l1 = false;
            for (let i = 0; i < user.user.lik.length; i++) {
                if (user.user.lik[i] === r._id) {
                    l1 = true;
                    break;
                }
            }
            if (l1 === true) {
                setIsliked(true);
            }
            let l2 = false;
            for (let i = 0; i < user.user.sav.length; i++) {
                if (user.user.sav[i] === r._id) {
                    l2 = true;
                    break;
                }
            }
            if (l2 === true) {
                setIssaved(true);
            }
        }
    }, [user]);

    const handlecardclick = (event) => {
        event.preventDefault();
        history.push({ pathname: '/RecipePage', state: r });
    };

    let VegStatus = (r.category === "Veg") ? true : false;
    let vegi = "#03550f"; // Veg or Nonveg tag
    if (!VegStatus) {
        vegi = "#930000";
    }

    const handlelike = () => {
        if (JSON.stringify(user) !== '{}') {
            let exu = user;
            const body = {
                _id: r._id
            };
            const auth = localStorage.getItem('auth-token');
            axios
                .put(`http://localhost:5000/recipe/like`, body, {
                    headers: { 'auth-token': auth }
                })
                .then((res) => {
                    if (res.data.ok === true) {
                        console.log(res.data.ok);
                        if (isLiked) {
                            let idx1 = exu.user.lik.indexOf(r._id);
                            if (idx1 > -1) {
                                exu.user.lik.splice(idx1, 1);
                            }
                            let idx2 = -1;
                            for (let j = 0; j < exu.liked.length; j++) {
                                if (exu.liked[j]._id === r._id) {
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
                            exu.user.lik.push(r._id);
                            exu.liked.push(r);
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
                _id: r._id
            };
            const auth = localStorage.getItem('auth-token');
            axios
                .put(`http://localhost:5000/recipe/save`, body, {
                    headers: { 'auth-token': auth }
                })
                .then((res) => {
                    if (res.data.ok === true) {
                        console.log(res.data.ok);
                        if (isSaved) {
                            let idx1 = exu.user.sav.indexOf(r._id);
                            if (idx1 > -1) {
                                exu.user.sav.splice(idx1, 1);
                            }
                            let idx2 = -1;
                            for (let j = 0; j < exu.saved.length; j++) {
                                if (exu.saved[j]._id === r._id) {
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
                            exu.user.sav.push(r._id);
                            exu.saved.push(r);
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

        <div className={Classes.Card}>
            <div style={{ display: "inline-block", width: "100%" }}>
                <div className={Classes.Title}>
                    <div>
                        <svg id="Veg-Nonveg-Logo" className={Classes.VegNonLogo} width="20" height="20" viewBox="0 0 21 21">
                            <g id="Rectangle_3" data-name="Rectangle 3" fill="none" stroke={vegi} stroke-width="2.1">
                                <rect width="21" height="21" rx="3" stroke="none" />
                                <rect x="1.05" y="1.05" width="18.9" height="18.9" rx="1.95" fill="none" />
                            </g>
                            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(4 4)" fill={vegi} stroke={vegi} stroke-width="1">
                                <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
                                <circle cx="6.5" cy="6.5" r="6" fill="none" />
                            </g>
                        </svg>
                    </div>
                    <p>{r.title}</p>
                </div>
            </div>
            <div className={Classes.info}>
                <div className={Classes.pict}>
                    <img src={r.picURL}></img>
                    <div lassName={Classes.infoBox}>
                        <div style={{ display: "inline-block" }}>
                            <Avatar r={r} />
                            <p className={Classes.Tag}>{r.mealType}</p>
                            <br />
                            <p className={Classes.Tag}>{r.cuisine}</p>
                            <br />
                            <p className={Classes.Tag}>{r.ingredients[0].ingname}</p>
                        </div>
                        <div className={Classes.actions}>
                            <div className={Classes.Button} onClick={handlelike}>
                                {
                                    isLiked ? <FcLike size={30} /> : <FcLikePlaceholder size={25} />
                                }
                            </div>
                            <div className={Classes.Button} onClick={handlesave}>
                                {
                                    isSaved ? <MdPlaylistAddCheck size={30} /> : <MdPlaylistAdd size={25} />
                                }
                            </div>
                            <div className={Classes.Button} onClick={handlecardclick} >
                                <MdOpenInNew size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
