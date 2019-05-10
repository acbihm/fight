import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App3';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App3 />, document.getElementById('root'));
serviceWorker.unregister();