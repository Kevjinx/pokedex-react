import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import * as createAction from './redux/actionCreator'

console.log(store)
console.log(createAction)

store.subscribe(() => {
	console.log('store changed: ', store.getState());
})


store.dispatch(createAction.pokemonAddedToTeam(55))
store.dispatch(createAction.pokemonAddedToTeam(52))

store.dispatch(createAction.pokemonRemovedFromTeam(52))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
