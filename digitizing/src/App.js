import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewHouseHoldPage from './pages/NewHouseHold';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/household-register'>
          <NewHouseHoldPage />
        </Route>
        <Route path='/all-households'>
          <AllMeetupsPage />
        </Route>
       
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
