import React from 'react';
import { BrowserRouter, Route, Router } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Result from './pages/Result';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {


  render = () => {
    return (
      <Router history={history}>
        <BrowserRouter>
          <Route exact path="/" component={ Home } />
          <Route path="/:login" component={ Result } />
        </BrowserRouter>
      </Router>
    );
  }

}

export default App;
