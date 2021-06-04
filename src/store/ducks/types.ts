import { IState as MemberState } from './members/types';

export interface ApplicationState {
  members: MemberState;
}
