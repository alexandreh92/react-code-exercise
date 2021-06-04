import { createStore, compose, applyMiddleware } from 'redux';

import Reactotron from '~/config/reactotronConfig';

export default (reducers: any, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === 'development' && Reactotron.createEnhancer
      ? compose(Reactotron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  const store = createStore(reducers, enhancer);

  return store;
};
