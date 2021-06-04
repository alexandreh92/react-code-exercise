import { select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

export function* someAction(): SagaIterator {
  yield select(state => state.members);
}
