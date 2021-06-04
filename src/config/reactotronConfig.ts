/* eslint-disable no-console */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

const tron = Reactotron.configure({ host: 'localhost' })
  .use(reactotronRedux())
  .use(reactotronSaga({}))
  .connect();

if (tron.clear) tron.clear();

console.tron = tron;

export default tron;
