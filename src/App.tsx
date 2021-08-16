import {Component} from 'react';
import './App.css';

import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import Index from './pages/Index/Index';

// import PrivateRouter from './components/privateRouter/Index';

class App extends Component<any,any>{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route component={Index} path='/' />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
