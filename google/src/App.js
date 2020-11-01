import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>

            </h1>
          </Route>
          <Route path="/">
            <Home>
            </Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
