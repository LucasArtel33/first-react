import './App.css';
import Login from './login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './homepage';

function App() {
  return (
    <Router>
       <Route 
        exact path="/" 
        render={() => {
           return <Login/> 
          }} />
      <Route 
        path="/home" 
        render={() => {
           return <Homepage/> 
          }} />
    </Router>
  );
}

export default App;
