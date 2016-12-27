import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import routes from './components/router';
// import App from './components/app';
// import Home from './pages/home';
// import Portfolio from './pages/portfolio';
// import Projects from './pages/projects';
// import Experience from './pages/experience';
// import TravelFood from './pages/travel&food';
// import Contact from './pages/contact';

// ReactDOM.render((
//   <Router history={ browserHistory }>
//     <Route path='/' component={ App }>
//       <IndexRoute component={ Home } />
//       <Route path='home' component={ Home } />
//       <Route path='portfolio' component={ Portfolio } />
//       <Route path='projects' component={ Projects } />
//       <Route path='experience' component={ Experience } />
//       <Route path='travel&food' component={ TravelFood } />
//       <Route path='contact' component={ Contact } />
//     </Route>
//   </Router>), document.getElementById('app'));

ReactDOM.render(<div>{ routes }</div>, document.getElementById('app'));