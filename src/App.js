import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import Home from './components/Home';
import Navigation from './containers/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation>
          <Switch>
            <Route exact path='/create' component={CreateComponent} />
            <Route exact path='/' component={Home} />
            <Route path='/edit/:id' component={EditComponent} />
            <Route path='/index' component={IndexComponent} />
          </Switch>
        </Navigation>
      </div>
    );
  }
}

export default App;
