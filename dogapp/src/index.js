import React from 'react';
import ReactDOM from 'react-dom';
import './client/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './client/css/index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
