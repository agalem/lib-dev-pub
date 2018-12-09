import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import "./App.scss";

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import UserDashboard from './UserDashboard/UserDashboard';
import BookPage from './BookPage/BookPage';
import Catalog from './Catalog/Catalog';
import NewsPage from './NewsPage/NewsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + '/user'} component={UserDashboard} />
          <Route path={process.env.PUBLIC_URL + '/book/:bookId'} component={BookPage} />
          <Route path={process.env.PUBLIC_URL + '/catalog'} component={Catalog}/>
          <Route path={process.env.PUBLIC_URL + '/news'} component={NewsPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
