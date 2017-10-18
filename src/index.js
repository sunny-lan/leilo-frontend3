import React from 'react';
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);
registerServiceWorker();
