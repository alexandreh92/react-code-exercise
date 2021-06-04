import { createReducer } from 'reduxsauce';

import Creators, { MemberTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  members: [],
};

/* Reducers */

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {});
