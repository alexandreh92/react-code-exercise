import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

import { reducer as members } from './members';
import { reducer as theme } from './theme';

import { History } from '~/services/history';

const createRootReducer = (history: History) =>
  combineReducers({
    members,
    theme,
    toastr,
    router: connectRouter(history),
  });

export default createRootReducer;
