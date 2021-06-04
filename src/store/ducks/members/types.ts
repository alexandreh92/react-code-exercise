import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Member } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  members: Member[];
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  ANY_ACTION: 'anyAction';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  anyAction: (params: any) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  members: Member[];
}
