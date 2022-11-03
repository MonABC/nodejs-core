const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request.....');
    res.setHeader('Conten-Type', 'text/html');
    res.write('<h3>Hello word</h3>');
    res.write('<h2>from ERIC & HOi DAn IT</h2>');
    res.end();
});

server.listen(3000, 'localhost',() => {
    console.log('Nodejs. server is running on port: 3000')
})