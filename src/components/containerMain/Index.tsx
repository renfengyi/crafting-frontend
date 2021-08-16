import {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Staking from '../../pages/Staking/Index';
import Home from '../../pages/Home/Index';
class ContainerMain extends Component<any,any>{
  render(){
    return (
        <Switch>
            <Route component={Staking} path='/index/staking' />
            <Route component={Home} path='/index/home' />
        </Switch>
    );
  }
}

export default ContainerMain;