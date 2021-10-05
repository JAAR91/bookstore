import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/navBar';
import Categories from './pages/Categories';
import NoMatch from './pages/NoMatch';
import BooksContainer from './pages/BooksContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BooksContainer />
        </Route>
        <Route exact path="/categories/">
          <Categories />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
