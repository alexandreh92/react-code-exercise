import { IState as MemberState } from './members/types';
import { IState as ThemeState } from './theme/types';

export interface ApplicationState {
  members: MemberState;
  theme: ThemeState;
}
