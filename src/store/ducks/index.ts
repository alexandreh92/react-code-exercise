import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

import { reducer as members } from './members';

import { History } from '~/services/history';

const createRootReducer = (history: History) =>
  combineReducers({
    members,
    toastr,
    router: connectRouter(history),
  });

export default createRootReducer;
