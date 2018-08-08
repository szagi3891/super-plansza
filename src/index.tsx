import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App/App';

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App label="dd" />, root);
}

console.info('Start');

const ff = (dd: string) => {
    console.info(`FF ${dd}`);
};

ff('33');

