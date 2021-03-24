import { combineReducers } from 'redux';

import postreducer from './posts';

export const reducers = combineReducers({posts: postreducer });
