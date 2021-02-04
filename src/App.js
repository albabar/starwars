import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Movies from "./Movies";

function App() {
  return (
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link to="/" className="py-2 d-none d-md-inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                   stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto"
                   role="img" viewBox="0 0 24 24"><title>Home</title>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
              </svg>
            </Link>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/movies" className="nav-link">Movies</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container">
          <div className="text-center py-5 px-8">
            <h1>All the StarWars Facts</h1>
          </div>

          <Switch>
            <Route path="/movies">
              <div>All the movies</div>
            </Route>
            <Route path="/">
              <Movies />
            </Route>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
