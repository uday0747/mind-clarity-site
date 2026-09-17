(async () => { await import(location.pathname === '/' || location.pathname.endsWith('/index') || location.pathname.endsWith('/index.html') ? './app.js' : './page-app.js'); })();
