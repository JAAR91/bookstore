import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import NoMatch from './components/NoMatch';
import BooksContainer from './components/BooksContainer';
import store from './redux/configureStores';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BooksContainer store={store} />
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
