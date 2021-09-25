import React from 'react';
import './Recipes.css';
import RECIPES from '../Data/recipes.json';
import { useHistory, Link } from 'react-router-dom';

function Recipes() {
    const history = useHistory();
    return (
        <div className='recipes'>
            <h1>Recipes</h1>
            <h2>
                <Link className="storyBehindLink" to={{pathname: '/venganacomer/'}}>
                    The story behind Vengan a Comer
                </Link>
            </h2>
            <ul className="ulListRecipe">
                {RECIPES.map((item, index) => {
                        return (
                            <li onClick={() => history.push('/recipes/'+item.name,{ recipeInfo: item })} className="listRecipes" key={index}>
                                {item.name}
                            </li>
                        )
                })}
               
            </ul>

        </div>
    )
}

export default Recipes
