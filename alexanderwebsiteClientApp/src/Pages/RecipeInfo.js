import * as React from 'react'
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import RECIPES from '../Data/recipes.json';
import './RecipeInfo.css';

function RecipeInfo() {
    const { recipeName } = useParams();
    const emptyRecipe = {"name":"","origin": "", "ingredients":[],"steps":[]};

    //if this was hooked up to database I would have to handle this differently
    const [recipeInfo, setrecipeInfo] = useState(emptyRecipe);

    React.useEffect(() => {
        setrecipeInfo(RECIPES.find(obj => obj.name===recipeName));
    }, [recipeName])
    
    
    return (
        <div className="test">
             <div className='recipeInfo'>
            <h1>{recipeInfo.name}</h1>
            <h4 className="origin">Recipe Origin:&nbsp;   
                <Link className="recipeInfoLink" to={{pathname: '/venganacomer/'}}>
                       Vengan A Comer
                </Link></h4>
            <h2>Ingredients</h2>
            <h5><Link className="recipeInfoLink" to={{pathname: '/recipes/'}}>
                    Explore more recipes
                </Link>
            </h5>
          
            <div className="content">
                
                <ul className="ingredients">
                    {recipeInfo.ingredients.map(ingredient => {
                        return (
                            <li key={ingredient} className="ingredient">{ingredient}</li>
                        )

                    })}
                </ul>
            </div>
            <h2>Instructions</h2>
            <div className="content">
                <ol className="steps">
                    {recipeInfo.steps.map(step => {
                                return (
                                    <li key={step} className="step">{step}</li>
                                )

                    })}
                </ol>
            </div>
        </div>
        </div>
       
    )
}

export default RecipeInfo