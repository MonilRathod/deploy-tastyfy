import React, { useState, useEffect, useContext, useHistory} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import "./upload.css";
import { Link, withRouter} from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'
import Select from 'react-select';
import { Button } from "@material-ui/core";
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { UserContext, RecipeContext, UserDispatchContext, RecipeDispatchContext } from '../../Contexts/context';

const optionsCategorys = [
  { value: 'Veg', label: 'Veg' },
  { value: 'Non-Veg', label: 'Non-Veg' },
  { value: 'Vegan', label: 'Vegan' },
];

const optionsMeals = [
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Lunch', label: 'Lunch' },
  { value: 'Dinner', label: 'Dinner' },
  { value: 'Snack', label: 'Snack' }
];

const optionsCuisines = [
  { value: 'American', label: 'American' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Indian', label: 'Indian' },
  { value: 'Maxican', label: 'Maxican' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'French', label: 'French' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Greek', label: 'Greek' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Turkish', label: 'Turkish' },
  { value: 'Thai', label: 'Thai' },
  { value: 'Caribbean', label: 'Caribbean' }
];

function Upload(props) {

  const { setR } = useContext(RecipeDispatchContext);
  const { recipes } = useContext(RecipeContext);
  const { user } = useContext(UserContext);
  const { setU } = useContext(UserDispatchContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [procedure, setProcedure] = useState("");
  const [picURL, setPicURL] = useState("");
  const [category, setCategory] = useState("");
  const [mealType, setMealtype] = useState("");
  const [preparationTime, setPreparationtime] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [optionsIngs, setOptionings] = useState([]);
  const [isError, setIsError] = useState(false);
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [qunt1, setQunt1] = useState("");
  const [qunt2, setQunt2] = useState("");
  const [qunt3, setQunt3] = useState("");
  const [qunt4, setQunt4] = useState("");
  const [qunt5, setQunt5] = useState("");

  useEffect(() => {

    const fetch = () => {

      setIsError(false);

      let one = `https://backend-tastyfy.onrender.com/query/ingredients`;

      const requestOne = axios.get(one);

      axios
        .all([requestOne])
        .then(
          axios.spread((...responses) => {
            const optioning = responses[0].data.data.ingredients.map(d => ({
              "value": d,
              "label": d

            }));
            setOptionings(optioning);
          })
        )
        .catch(err => {
          setIsError(true);
          console.log(err);
        })
    }
    fetch();
  }, []);

  const changeCategory = (event) => {
    setCategory(event.label);
  };

  const changeMealType = (event) => {
    setMealtype(event.label);
  };

  const changeCuisine = (event) => {
    setCuisine(event.label);
  };

  const changepreparationTime = (event) => {
    setPreparationtime(event.target.value);
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const changeProcedure = (event) => {
    setProcedure(event.target.value);
  };

  const changePicURL = (event) => {
    setPicURL(event.target.value);
  };

  const uploadrecipe = (e) => {
    
    e.preventDefault();
    
    let ingredients = [];

    if (ingredient1 !== "" && qunt1 !== "") ingredients.push({ ingname: ingredient1, ingqunt: qunt1 })
    if (ingredient2 !== "" && qunt2 !== "") ingredients.push({ ingname: ingredient2, ingqunt: qunt2 })
    if (ingredient3 !== "" && qunt3 !== "") ingredients.push({ ingname: ingredient3, ingqunt: qunt3 })
    if (ingredient4 !== "" && qunt4 !== "") ingredients.push({ ingname: ingredient4, ingqunt: qunt4 })
    if (ingredient5 !== "" && qunt5 !== "") ingredients.push({ ingname: ingredient5, ingqunt: qunt5 })

    if (ingredients.length === 0) { alert('Please add atleast one ingredient'); return; }
    if (title === "") { alert('Please add title'); return; }
    if (description === "") { alert('Please add description'); return; }
    if (picURL === "") { alert('Please add picture url'); return; }
    if (procedure === "") { alert('Please add procedure'); return; }
    if (category === "") { alert('Please add category'); return; }
    if (mealType === "") { alert('Please add meal type'); return; }
    if (cuisine === "") { alert('Please add cuisine'); return; }
    if (isNaN(parseInt(preparationTime)) || parseInt(preparationTime) <= 0) { alert('Please add preparation time'); return; }

    const body = {
      title: title,
      description: description,
      picURL: picURL,
      procedure: procedure,
      category: category,
      mealType: mealType,
      preparationTime: parseInt(preparationTime),
      cuisine: cuisine,
      ingredients: ingredients
    }
    const auth = localStorage.getItem('auth-token');
    axios
      .post(`https://backend-tastyfy.onrender.com/recipe/upload`, body, {
        headers : {'auth-token' : auth}
      })
      .then((res) => {
        if (res.data.ok === true) {
          setR([...recipes, res.data.data.recipe]);
          let extrauser = user;
          extrauser.user.rec.push(res.data.data.recipe._id);
          extrauser.uploaded.push(res.data.data.recipe);
          setU(extrauser);
          alert("Recipe Uploaded");
          props.history.push('/');
        } else {
          alert(res.data.err);
        }
      }
      )
      .catch(err => alert(err));
  }

  return (
    <>
      <div className="container-upload">

        <Link className="close-btn" to="/">
          <IoCloseSharp className size={44} /> <div>Close</div>
        </Link>

        <div className="upload-title">
          <h1>Upload Recipe</h1>
        </div>

        <form style={{ "justify-content": "center", "align-items": "center" }}>
          <div className="mb-3 mt-4" >
            <h4>Title</h4>
            <TextField required size="small" value={title} onChange={changeTitle} id="outlined-basic" label="Title" variant="outlined" style={{ 'width': '100%' }} />
          </div>
          <div className="mb-3 mt-4" >
            <h4>Picture URL</h4>
            <TextField required size="small" value={picURL} onChange={changePicURL} id="outlined-basic" label="Picture URL" variant="outlined" style={{ 'width': '100%' }} />
          </div>
          <div className="mb-3">
            <h4>Description</h4>
            <TextField
              required
              size="small"
              value={description}
              onChange={changeDescription}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={2}
              defaultValue=""
              variant="outlined"
              style={{ 'width': '100%' }}
            />
          </div>
          <div className="mb-3">
            <h4>Procedure</h4>
            <TextField
              required
              size="small"
              value={procedure}
              onChange={changeProcedure}
              style={{ 'width': '100%' }}
              id="outlined-basic"
              label="Procedure"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
            />
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Preparation Time</h4>
              <TextField
                required
                size="small"
                style={{ 'width': '100%' }}
                id="outlined-multiline-static"
                label="Preparation Time (in Minutes)"
                rows={1}
                value={preparationTime}
                onChange={changepreparationTime}
                variant="outlined"
              />
            </div>
            <div className="flexitem">
              <h4>Category</h4>
              <Select
                className='select-category'
                options={optionsCategorys}
                placeholder={'Recipe Category'}
                onChange={changeCategory}
              />
            </div>
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Meal Type</h4>
              <Select
                className='select-meal'
                options={optionsMeals}
                placeholder={'Recipe Meal Type'}
                onChange={changeMealType}
              />
            </div>
            <div className="flexitem">
              <h4>Cuisine</h4>
              <Select
                className='select-cuisine'
                options={optionsCuisines}
                placeholder={'Recipe Cuisine Type'}
                onChange={changeCuisine}
              />
            </div>
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Ingredient 1 Name</h4>
              <CreatableSelect
                className='select-ingredient'
                options={optionsIngs}
                placeholder={'Ingredient 1 Name'}
                onChange={(option, action) => setIngredient1(option.label)}
              />
            </div>
            <div className="flexitem">
              <h4>Ingredient 1 Quntity</h4>
              <TextField
                size="small"
                style={{ 'width': '100%' }}
                id="outlined-multiline-static"
                rows={1}
                value={qunt1}
                onChange={e => setQunt1(e.target.value)}
                variant="outlined"
              />
            </div>
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Ingredient 2 Name</h4>
              <CreatableSelect
                className='select-ingredient'
                options={optionsIngs}
                placeholder={'Ingredient 2 Name'}
                onChange={(option, action) => setIngredient2(option.label)}
              />
            </div>
            <div className="flexitem">
              <h4>Ingredient 2 Quntity</h4>
              <TextField
                size="small"
                style={{ 'width': '100%' }}
                id="outlined-multiline-static"
                rows={1}
                value={qunt2}
                onChange={e => setQunt2(e.target.value)}
                variant="outlined"
              />
            </div>
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Ingredient 3 Name</h4>
              <CreatableSelect
                className='select-ingredient'
                options={optionsIngs}
                placeholder={'Ingredient 3 Name'}
                onChange={(option, action) => setIngredient3(option.label)}
              />
            </div>
            <div className="flexitem">
              <h4>Ingredient 3 Quntity</h4>
              <TextField
                size="small"
                style={{ 'width': '100%' }}
                id="outlined-multiline-static"
                rows={1}
                value={qunt3}
                onChange={e => setQunt3(e.target.value)}
                variant="outlined"
              />
            </div>
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Ingredient 4 Name</h4>
              <CreatableSelect
                className='select-ingredient'
                options={optionsIngs}
                placeholder={'Ingredient 4 Name'}
                onChange={(option, action) => setIngredient4(option.label)}
              />
            </div>
            <div className="flexitem">
              <h4>Ingredient 4 Quntity</h4>
              <TextField
                size="small"
                style={{ 'width': '100%' }}
                id="outlined-multiline-static"
                rows={1}
                value={qunt4}
                onChange={e => setQunt4(e.target.value)}
                variant="outlined"
              />
            </div>
          </div>
          <div className="md-3 mt-3 flexclass">
            <div className="flexitem">
              <h4>Ingredient 5 Name</h4>
              <CreatableSelect
                className='select-ingredient'
                options={optionsIngs}
                placeholder={'Ingredient 5 Name'}
                onChange={(option, action) => setIngredient5(option.label)}
              />
            </div>
            <div className="flexitem">
              <h4>Ingredient 5 Quntity</h4>
              <TextField
                size="small"
                style={{ 'width': '100%' }}
                id="outlined-multiline-static"
                rows={1}
                value={qunt5}
                onChange={e => setQunt5(e.target.value)}
                variant="outlined"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="mb-3">
            <Button type="submit" variant="outlined" color="primary" onClick={uploadrecipe}>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default withRouter(Upload);