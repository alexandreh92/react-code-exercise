import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Theme } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  theme: Theme;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  CHANGE_THEME: 'changeTheme';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  changeTheme: (theme: Theme) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export type IState = Theme;
