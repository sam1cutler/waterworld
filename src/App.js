import { Link, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

import Movies from './Movies';
import Articles from './Articles';
import LandingPage from './LandingPage';
import Stopwatch from './stopwatch';
import MoviesToo from './Movies2';
import StopwatchTwo from './stopwatch2';

function App() {

  const renderContent = () => {

    return (
      <>
        <Route 
          path='/'
          exact
          component={LandingPage}
        />
        <Route 
          path='/movies'
          component={Movies}
        />
        <Route 
          path='/articles'
          component={Articles}
        />
        <Route 
          path='/stopwatch'
          component={Stopwatch}
        />
        <Route 
          path='/movies2'
          component={MoviesToo}
        />
        <Route 
          path='/stopwatch2'
          component={StopwatchTwo}
        />
      </>
    )

  }

  return (

    <div className="App">
      <Link
        to='/'
      >
        <h1>Miscellany...</h1>
      </Link>
      <nav>
        <NavLink
          className='nav-link'
          to='/movies'
        >
          Movies
        </NavLink>
        <NavLink
          className='nav-link'
          to='/articles'
        >
          Articles
        </NavLink>
        <NavLink
          className='nav-link'
          to='/stopwatch'
        >
          Stopwatch
        </NavLink>
        <NavLink
          className='nav-link'
          to='/movies2'
        >
          Movies2
        </NavLink>
        <NavLink
          className='nav-link'
          to='/stopwatch2'
        >
          Stopwatch2
        </NavLink>
      </nav>
      {renderContent()}
    </div>

  );

}

export default App;
