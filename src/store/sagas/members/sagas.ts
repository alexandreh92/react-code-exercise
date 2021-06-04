import { takeLatest } from 'redux-saga/effects';

import { someAction } from '.';

import { MemberTypes } from '~/store/ducks/members/creators';

const sagas = [takeLatest(MemberTypes.GET_SERVERS_SUCCESS, someAction)];

export default sagas;
