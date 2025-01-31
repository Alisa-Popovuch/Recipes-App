//id 05fc4209
//key  66cc3c7f01ac07be408c8e739a858793
// https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=05fc4209&app_key=%2066cc3c7f01ac07be408c8e739a858793

import { useEffect } from "react";

function App() {
  const MY_ID = "05fc4209";
  const MY_KEY = " 66cc3c7f01ac07be408c8e739a858793";
  
  useEffect (() => {
    const getRecipe = async() => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=%20${MY_KEY}`);
      const data = await responce.json();
      console.log(data)
      }
      getRecipe();
  }, [])

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default App;
