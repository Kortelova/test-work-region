import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Country from './components/country';
import Regions from './components/regions';

function App() {
  let [region, setRegion] = React.useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path ='/'>
          <Regions setRegion={setRegion}/>
        </Route>
        <Route exact path='/country-list'>
          <Country region={region} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
