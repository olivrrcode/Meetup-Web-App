import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favourites.js';
import Layout from './components/layout/Layout.js';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;