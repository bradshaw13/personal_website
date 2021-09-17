import React from 'react';
import './Recipes.css';
import RECIPES from '../Data/recipes.json';
import { Link } from 'react-router-dom';
function Recipes() {
    return (
        <div className='recipes'>
            <h1>Recipes</h1>
            <ul className="ulListRecipe">
                {RECIPES.map((item, index) => {
                        return (
                            <li className="listRecipes" key={index}>
                                <Link className="listRecipesLink" to={{pathname: '/Recipes/'+item.name, 
                                    state: {
                                        recipeInfo: item
                                    }}}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                })}
               
            </ul>

        </div>
    )
}

export default Recipes
