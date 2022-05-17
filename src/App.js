import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>
            Luke Lowrey II
          </h2>
        </div>
        <div className="header-right">

          <Link className='header-link' to="/">Bio</Link>
          <br></br>
          <Link className='header-link' to="/projects">Projects</Link>
          <br></br>
          <Link to="/resume">Resume</Link>
          <br></br>
          <Link to="/art">Art</Link>
          <br></br>

        </div>
      </header>
      
      <div>
        <Switch>

          <Route exact path="/">
            <Bio />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/art">
            <Resume />
          </Route>
        </Switch>
      </div>

      <footer className="footer">
      <div>
          <h2>
            Luke Lowrey II
          </h2>
        </div>
        <div className="footer-right">
          <a className="social-link" href="https://www.linkedin.com/in/lukelowrey2/" target="_blank"> <img className="social-icon" src="https://i.imgur.com/0vnuVJ3.png" alt="Luke Lowrey Profile"></img></a>
          <a className="social-link"href="https://github.com/LukeLowrey2" target="_blank"><img className="social-icon"src="https://i.imgur.com/uBgKiip.png" alt="Luke Lowrey Profile"></img></a>
        </div>
        
      </footer>

    </div>
  );
}

export default App;
