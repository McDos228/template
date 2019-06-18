const http = require('http');
const app = require('./app');
require('dotenv').config();
require('./cron');
const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server start on port', port);
});