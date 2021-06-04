import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    changeTheme: ['theme'],
  },
  { prefix: '@theme/' },
);

export const ThemeTypes = Types;
export default Creators;
