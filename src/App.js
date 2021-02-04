import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Link to="/movies">Movies</Link>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Switch>
            <Route path="/movies">
              <div>All the movies</div>
            </Route>
            <Route path="/">
              <div>Testing my heart.</div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
