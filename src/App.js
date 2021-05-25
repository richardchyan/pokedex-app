import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
