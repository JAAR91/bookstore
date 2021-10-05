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
import Notification from './components/notification';

console.log(store.getState());

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
      <Notification />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
