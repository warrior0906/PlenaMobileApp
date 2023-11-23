import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import productReducer from './slices/productSlice';

const sagaMiddle = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: [sagaMiddle],
});

sagaMiddle.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
