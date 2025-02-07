function MyRecipesComponent({ label, image, ingredients, calories, fullRecipe, dishType, source }) {
    return(
        <div className="recipes">
            <h2>{ label }</h2>
            <img className="imgRecipe" src={ image } alt="recipes" />
            <ul>
                { ingredients.map((ingredient, index) => (
                    <li key={ index }> 
                        <img src="https://img.icons8.com/?size=100&id=SIUnfSbsfSmZ&format=png&color=64d100" alt="icon" width={30} />
                        { ingredient }
                    </li>
                ))}
            </ul>
            <p>{ calories.toFixed() } calories</p>
            <p> Dish Type: { dishType }</p>
            <div className="source">
                <a href={ fullRecipe } target="_blank">
                    <button className="instruction">Cooking instructions</button>
                </a>
                <p className="from"> from { source }</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;