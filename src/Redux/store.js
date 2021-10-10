import { createStore } from 'redux';

import { reducer } from './Todo/reducer.js';


export const store = createStore(reducer);