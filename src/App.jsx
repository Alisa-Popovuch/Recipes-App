import { useEffect, useState } from "react";
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from "./MyRecipesComponent";

function App() {
  const MY_ID = "fa3f129e";
  const MY_KEY = "5fdecead1ba8860527f4aac1b4a0cc98";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salad");
  
  useEffect (() => {
    const getRecipe = async() => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=%20${MY_KEY}%09`);
      const data = await responce.json();
      setMyRecipes(data.hits);
      }
      getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <div className="header">
          <h1>Find a Recipe</h1>
          <p>Enter the recipe or ingredients you need in the search bar</p>
        </div>
      </div>
      <div className="container">
        <form onSubmit={ finalSearch }>
          <input className="search" onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>
      <div className="container">
        <button className="btn" onClick={ finalSearch }>
          <img src="https://img.icons8.com/fluency/58/000000/fry.png" alt="icon"/>
        </button>
      </div>
      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index} 
                            label = { element.recipe.label } 
                            image = { element.recipe.image }
                            ingredients = { element.recipe.ingredientLines}
                            calories = { element.recipe.calories }
                            fullRecipe = { element.recipe.url }
                            dishType = { element.recipe.dishType }
                            source = { element.recipe.source }
        />
      ))}
      <div id="edamam-badge" data-color="white"></div>
    </div>
  )
}

export default App;
