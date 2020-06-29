import React, { Fragment } from 'react';
import './App.css';
import './Bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DemoSap from './components/DemoSap'
import ViewSap from './components/ViewSap'
import Demo from './components/Demo'
import View from './components/View'

function App() {
  return (    
    <Router>
    <Fragment>      
      <Switch>
        <Route path="/" exact component={DemoSap} />
        <Route path="/viewsap" component={ViewSap} />

        <Route path="/Demo" exact component={Demo} />
        <Route path="/view" component={View} />
      </Switch>      
    </Fragment>
  </Router>
  );
}

export default App;
