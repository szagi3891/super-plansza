import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App/App';
import { AppState } from 'AppState/AppState';

const appState = new AppState();
const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App appState={appState}/>, root);
}

