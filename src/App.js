import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import './App.css'
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header/>
          <Sidebar/>
         <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route exact path='/contact' component={Contact}/>
            <Route exact path='/projects' component={Projects}/> */}
        </Switch>
        </div>
        </React.Fragment>
    );
  }
}

export default App;