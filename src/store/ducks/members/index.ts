import { createReducer } from 'reduxsauce';

import Creators, { MemberTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  members: [],
  currentFilter: {
    chamber: '',
    congress: '',
  },
};

/* Reducers */

const handleGetMembers = (
  state: IState,
  { members }: ISetPropAction,
): IState => ({ ...state, members });

const handleSetFilters = (
  state: IState,
  { params }: ISetPropAction,
): IState => ({
  ...state,
  currentFilter: {
    chamber: params?.chamber ? params.chamber : state.currentFilter.chamber,
    congress: params?.congress ? params.congress : state.currentFilter.congress,
  },
});

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_MEMBERS_REQUEST]: handleSetFilters,
  [Types.GET_MEMBERS_SUCCESS]: handleGetMembers,
});
