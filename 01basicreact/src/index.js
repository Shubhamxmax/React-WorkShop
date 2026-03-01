import React from 'react';
import ReactDOM from 'react-dom/client';
// implementation for webpage
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//  Connects React to the real DOM element (<div id="root">) in the index.html file.
root.render(
    <App />
);

