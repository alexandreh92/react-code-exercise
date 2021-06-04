import { Switch, Route } from 'react-router-dom';

import Index from '~/pages/';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  );
};

export default Routes;
