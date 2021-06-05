import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Member } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  members: Member[];
  congress: string;
  chamber: string;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_MEMBERS_REQUEST: 'getMembersRequest';
  GET_MEMBERS_SUCCESS: 'getMembersSuccess';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getMembersRequest: (params: {
    congress: string;
    chamber: string;
  }) => ISetPropAction;
  getMembersSuccess: (members: Member[]) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  members: Member[];
}
