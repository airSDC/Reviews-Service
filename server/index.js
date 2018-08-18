require('newrelic');
const app = require('./app');

app.listen(app.get('port'), () => console.log(`listeningg on port ${app.get('port')}!`));
