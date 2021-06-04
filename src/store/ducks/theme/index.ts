import { createReducer } from 'reduxsauce';

import { IState, IActions, ISetPropAction } from './types';
import Creators, { ThemeTypes as Types } from './creators';

import { lightTheme } from '~/styles/theme';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = lightTheme;

/* Reducers */

export const handleChangeTheme = (
  state: IState,
  { theme }: ISetPropAction,
): IState => ({ ...state, ...theme });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.CHANGE_THEME]: handleChangeTheme,
});
