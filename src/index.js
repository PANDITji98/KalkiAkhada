import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';       //to use the routers from app.js

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
 <App />                                             {/*wrapped up in browserrouters to make it work   */}
</BrowserRouter>
);