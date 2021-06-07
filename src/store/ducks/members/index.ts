import { createReducer } from 'reduxsauce';

import Creators, { MemberTypes as Types } from './creators';
import { IState, IActions, CurrentFilterType } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  members: [],
  currentFilter: {
    chamber: '',
    congress: '',
  },
  loading: false,
};

/* Reducers */

export const handleGetMembers = (
  state: IState,
  { members }: Pick<IState, 'members'>,
): IState => ({ ...state, members });

export const handleSetFilters = (
  state: IState,
  { params }: { params: CurrentFilterType },
): IState => ({
  ...state,
  currentFilter: {
    chamber: params?.chamber ? params.chamber : state.currentFilter.chamber,
    congress: params?.congress ? params.congress : state.currentFilter.congress,
  },
});

export const handleSetLoading = (
  state: IState,
  { loading }: Pick<IState, 'loading'>,
): IState => ({ ...state, loading });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_MEMBERS_REQUEST]: handleSetFilters,
  [Types.GET_MEMBERS_SUCCESS]: handleGetMembers,
  [Types.SET_LOADING]: handleSetLoading,
});
