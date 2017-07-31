import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './register-service-worker';

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import { Provider } from 'react-redux';

import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';

import './index.scss';
import { App } from './app.component';

// [? 3] file structure ./type/domain vs ./domain/type(reducer,adapter,...)
import { temperatureReducer } from './reducers/temperature';
import { windReducer } from './reducers/wind';
import { humidityReducer } from './reducers/humidity';

import { temperatureFetch } from './epics/temperature';
import { windSpeedFetch } from './epics/wind';


const rootReducer = combineReducers({
  temperature : temperatureReducer,
  wind        : windReducer,
  humidity    : humidityReducer,
  // total       :
});

const rootEpic = combineEpics(
  temperatureFetch,
  windSpeedFetch,
);

const epicsMiddleware = createEpicMiddleware(rootEpic);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  applyMiddleware(epicsMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
