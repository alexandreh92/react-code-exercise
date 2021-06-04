import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

/* Sagas */

import MembersSagas from './members/sagas';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([...MembersSagas]);
}
