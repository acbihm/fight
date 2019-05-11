import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppTest from './AppTest';
// import AppMenu from './AppMenu';
import AppLoading from './AppLoading';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<AppTest />, document.getElementById('root'));
ReactDOM.render(<AppLoading />, document.getElementById('root'));

serviceWorker.unregister();