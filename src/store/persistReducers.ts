import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'lemoneyTest',
      storage,
      whitelist: ['members'],
      stateReconciler: autoMergeLevel2,
    },
    reducers,
  );

  return persistedReducer;
};
