import { Switch, Route } from 'react-router-dom';

import Welcomes from '~/pages/Welcomes';
import Congressman from '~/pages/Congressman';
import CongressmanShow from '~/pages/Congressman/Show';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcomes} />
      <Route exact path="/congressman" component={Congressman} />
      <Route
        exact
        path="/congressman/:id/:addressB64"
        component={CongressmanShow}
      />
    </Switch>
  );
};

export default Routes;
