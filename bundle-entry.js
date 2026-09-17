import React from 'react';
import ReactDOM from 'react-dom/client';

globalThis.React = React;
globalThis.ReactDOM = ReactDOM;
(async () => { await import(location.pathname === '/' || location.pathname.endsWith('/index') || location.pathname.endsWith('/index.html') ? './app.js' : './page-app.js'); })();
