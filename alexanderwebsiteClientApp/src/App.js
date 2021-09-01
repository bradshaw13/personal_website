import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Travel from './Pages/Travel';
import Portfolio from './Pages/Portfolio';

function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Recipes' exact component={Recipes}/>
        <Route path='/Travel' exact component={Travel}/>
        <Route path='/Portfolio' exact component={Portfolio}/>

      </Switch>
    </Router>
      
    </>
    
  );
}


export default App;
