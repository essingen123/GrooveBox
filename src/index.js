import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Instructions from './Components/Instructions';
import DrumMachine from './Components/DrumMachine';
import Visualizer from './Components/Visualizer';
import './reset.css';
import './index.css';
import { Router, browserHistory, Route, IndexRedirect } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/instructions' />
      <Route path='/instructions' component={Instructions}/>
      <Route path='/drummachine' component={DrumMachine}/>
      <Route path='/visualizer' component={Visualizer}/>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
