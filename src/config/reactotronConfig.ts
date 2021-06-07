/* eslint-disable no-console */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

const tron =
  process.env.NODE_ENV === 'development'
    ? Reactotron.configure({ host: 'localhost' })
        .use(reactotronRedux())
        .use(reactotronSaga({}))
        .connect()
    : null;

if (tron?.clear) tron.clear();

console.tron = tron;

export default tron;
