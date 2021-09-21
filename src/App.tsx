import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/"  component={GameStartPage} /> */}
        
          <Route exact path="/" >
            <LandingPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
