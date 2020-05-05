import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose ,combineReducers} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import Reducer from "./Reducer/reducer"
import WishReducer from "./Reducer/wishReducer"

const masterReducer = combineReducers({
  name:Reducer,
  wish : WishReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const Store = createStore(Reducer,composeEnhancers(applyMiddleware(thunk)));  old code first time create reducer
const Store = createStore(masterReducer,{name:"Atul Tiwari", wish:["eat","sleep"]},composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={Store}> <App />   </Provider>  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
