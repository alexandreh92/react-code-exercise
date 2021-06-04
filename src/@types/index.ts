import { lightTheme } from '~/styles/theme';

export type { ApplicationState } from '~/store/ducks/types';

export type Theme = typeof lightTheme;

export interface Member {
  id: number;
}
