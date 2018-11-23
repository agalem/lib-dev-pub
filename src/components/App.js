import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import "./App.scss";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import UserDashboard from './UserDashboard/UserDashboard';
import BookPage from './BookPage/BookPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + '/user'} component={UserDashboard} />
          <Route path={process.env.PUBLIC_URL + '/book/:bookId'} component={BookPage} />
        </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App;
