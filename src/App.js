import { Link, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

import Movies from './Movies';
import Articles from './Articles';
import LandingPage from './LandingPage';

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
      </nav>
      {renderContent()}
    </div>

  );

}

export default App;
