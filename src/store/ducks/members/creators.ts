import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    getMembersRequest: ['params'],
    getMembersSuccess: ['members'],
  },
  { prefix: '@members/' },
);

export const MemberTypes = Types;
export default Creators;
