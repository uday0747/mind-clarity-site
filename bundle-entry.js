import React from 'react';
import ReactDOM from 'react-dom/client';

globalThis.React = React.default || React;
globalThis.ReactDOM = ReactDOM.default || ReactDOM;
(async () => { await import(location.pathname === '/' || location.pathname.endsWith('/index') || location.pathname.endsWith('/index.html') ? './app.js' : './page-app.js'); })();
