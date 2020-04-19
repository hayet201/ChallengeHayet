import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Posts from './Components/Posts'
import Users from './Components/Users'
import Comments from './Components/Comments'
import './App.css';
import Button from '@material-ui/core/Button';
function App() {
  return (
    <div className="App">
      <Router>
      
            <Route path='/Posts/:userId' component={Posts}/>
            <Route exact path='/' component={Users}/>  
          <Route path='/Comments/:postId'component={Comments}/>
    </Router>
    </div>
  );
}

export default App;
