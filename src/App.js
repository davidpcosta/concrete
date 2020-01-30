import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MainSearch from './MainSearch';
import Result from './Result';

class App extends React.Component {


  render = () => {
    return (
      <Router>
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <MainSearch />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;
