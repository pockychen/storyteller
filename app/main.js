require('./app.styl');
App = require('./app.ls');

subject = decodeURIComponent(location.search).split('?')[1]
baseUrl = location.origin+location.pathname+'?'+subject
doc = require('./story/'+subject+'/book.md');
app = new App(doc, baseUrl);
