import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import "./App.scss";

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import UserDashboard from './UserDashboard/UserDashboard';
import BookPage from './BookPage/BookPage';
import CatalogPage from './CatalogPage/CatalogPage';
import NewsPage from './NewsPage/NewsPage';
import AdminPage from './AdminPage/AdminPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + '/user'} component={UserDashboard} />
          <Route path={process.env.PUBLIC_URL + '/book/:bookId'} component={BookPage} />
          <Route path={process.env.PUBLIC_URL + '/catalog'} component={CatalogPage}/>
          <Route path={process.env.PUBLIC_URL + '/news'} component={NewsPage}/>
          <Route path={process.env.PUBLIC_URL + '/admin'} component={AdminPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
