import {
  INITIAL_STATE,
  handleChangeTheme,
} from '../../../src/store/ducks/theme';
import { darkTheme } from '../../../src/styles/theme';

describe('members reducers', () => {
  describe('handleGetMembers', () => {
    it('sets member to state', () => {
      expect(
        handleChangeTheme(INITIAL_STATE, {
          theme: darkTheme,
        }),
      ).toEqual({ ...INITIAL_STATE, ...darkTheme });
    });
  });
});
