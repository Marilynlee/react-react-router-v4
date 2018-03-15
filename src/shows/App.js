/**
 * @fileOverview
 * @author wb-lyn227583
 */
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Tvlist from './Tvlist';
import Show from './Show';


class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/tv" component={Tvlist}/>
        <Route path='/tv/:number' component={Show}/>
      </Switch>
    );
  }
}

export {App as default}

