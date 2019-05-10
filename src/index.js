import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppTest from './AppTest';
import AppMenu from './AppMenu';


import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<AppTest />, document.getElementById('root'));
ReactDOM.render(<AppMenu />, document.getElementById('root'));

serviceWorker.unregister();