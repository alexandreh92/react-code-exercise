import { Switch, Route } from 'react-router-dom';

import Welcomes from '~/pages/Welcomes';
import Congressman from '~/pages/Congressman';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcomes} />
      <Route path="/congressman" component={Congressman} />
    </Switch>
  );
};

export default Routes;
