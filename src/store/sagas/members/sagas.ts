import { takeLatest } from 'redux-saga/effects';

import { getMembers } from '.';

import { MemberTypes } from '~/store/ducks/members/creators';

const sagas = [takeLatest(MemberTypes.GET_MEMBERS_REQUEST, getMembers)];

export default sagas;
