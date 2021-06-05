import { createReducer } from 'reduxsauce';

import Creators, { MemberTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  members: [],
};

/* Reducers */

const handleGetMembers = (
  state: IState,
  { members }: ISetPropAction,
): IState => ({ ...state, members });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_MEMBERS_SUCCESS]: handleGetMembers,
});
