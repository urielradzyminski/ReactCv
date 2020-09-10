import React from 'react';
import Menu from './Menu/Menu';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
// import Pricing from './Pricing/Pricing';
// import Contact from './Contact/Contact';
// import About from './Pages/About/About';
// import './App.css';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
        <Menu/>
        <Switch>
          
          <Route path="/pricing">
            {/* <Pricing /> */}
          </Route>
          <Route path="/contact">
            {/* <Contact /> */}
          </Route>
          
          <Route path="/about">
            {/* <About /> */}
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer 
          id="siteFooter" 
          className="text-dark bg-light py-5 mt-md-5 pt-md-5 border-top text-center">
          Creado con React y Bootstrap por Uriel Radzyminski

        </footer>
    </BrowserRouter>
  );
}

export default App;
