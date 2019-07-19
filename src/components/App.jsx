// @flow

import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import Courses from '../data/courses.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: Courses };
  }

  render() {
    const { courses } = this.state
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="#/" className="brand-logo center">Courses</a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="#/">React</a></li>
                <li><a href="#/">React Native</a></li>
                <li><a href="#/">Framer</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <Grid items={courses} />
        </div>
      </div>
    );
  }
}
