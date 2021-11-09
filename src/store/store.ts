import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/auth';

const rootReducer = combineReducers({
    users: userSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;