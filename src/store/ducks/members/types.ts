import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Member } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  members: Member[];
  congress: string;
  chamber: string;
  loading: boolean;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_MEMBERS_REQUEST: 'getMembersRequest';
  GET_MEMBERS_SUCCESS: 'getMembersSuccess';
  SET_LOADING: 'setLoading';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getMembersRequest: (params?: {
    congress?: string;
    chamber?: string;
    currenFilter?: CurrentFilterType;
  }) => ISetPropAction;
  getMembersSuccess: (members: Member[]) => ISetPropAction;
  setLoading: (loading: boolean) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export type CurrentFilterType = {
  chamber?: string;
  congress?: string;
};

export interface IState {
  members: Member[];
  currentFilter: CurrentFilterType;
  loading: boolean;
}
