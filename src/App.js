// import logo from './logo.svg';
import './App.css';
import Navbar from './componnets/Navbar';
import News from './componnets/News';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        <Router>
        {/* hello! this is are class based react app {this.c} */}
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
        <Route exact path="/general" ><News  setProgress={this.setProgress} key="general" pagesize="8" country="in" category="general"/></Route>
        <Route exact path="/entertainment" ><News  setProgress={this.setProgress} key="entertainment" pagesize="8" country="in" category="entertainment"/></Route>
        <Route exact path="/business" ><News  setProgress={this.setProgress} key="business" pagesize="8" country="in" category="business"/></Route>
        <Route exact path="/health" ><News  setProgress={this.setProgress} key="health" pagesize="8" country="in" category="health"/></Route>
        <Route exact path="/science" ><News  setProgress={this.setProgress} key="science" pagesize="8" country="in" category="science"/></Route>
        <Route exact path="/sports" ><News  setProgress={this.setProgress} key="sports" pagesize="8" country="in" category="sports"/></Route>
        <Route exact path="/technology" ><News  setProgress={this.setProgress} key="technology" pagesize="8" country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
