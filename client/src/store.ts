import {legacy_createStore as createStore, applyMiddleware, CombinedState} from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension'
// /<reference lib="dom"/>

const store = createStore(rootReducer, composeWithDevTools && composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>

export type appDispatch = typeof store.dispatch;

export default store;