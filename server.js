const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json')
const middlewares = jsonServer.defaults({
    static: './build',
});

const PORT = process.env.PORT || 3080;

server.use(router);
server.use(middlewares);

server.listen(PORT, () => {
    console.log('Server is running...');
});