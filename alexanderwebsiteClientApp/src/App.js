import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Travel from './Pages/Travel';
import Portfolio from './Pages/Portfolio';
import TravelByCity from './Pages/TravelByCity';
import RecipeInfo from './Pages/RecipeInfo';
import AboutMe from './Pages/AboutMe';

function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/recipes' exact component={Recipes}/>
        <Route path='/recipes/:recipeName' exact component={RecipeInfo}/>
        <Route path='/portfolio' exact component={Portfolio}/>
        <Route path='/travel' exact component={Travel}/>
        <Route path='/travel/:city' exact component={TravelByCity}/>
        <Route path='/aboutme' exact component={AboutMe}/>
        

      </Switch>
    </Router>
      
    </>
    
  );
}


export default App;
