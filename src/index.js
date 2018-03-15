import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './index.css'
import CommentBox from './components/CommentBox';
import App from './shows/App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const Home=()=>{
  return(
    <div>
      <h1 className='home-title'>Welcome to React-router!</h1>
    </div>
  );
};


const Navbar=()=>{
  return(
    <header>
      <nav>
        <ul className='navbar'>
          <li className='nav-item'><Link to="/">首 页</Link></li>
          <li className='nav-item'><Link to="/tv">节 目</Link></li>
          <li className='nav-item'><Link to="/comment">评 论</Link></li>
        </ul>
      </nav>
    </header>
  );
};
const Main=()=>{
  return(
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/tv' component={App}/>
        <Route path="/comment" component={CommentBox}/>
      </Switch>
    </main>
  );
};


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar/>
      <Main/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
