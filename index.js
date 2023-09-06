const http = require('http');
const ProductController = require('./controllers/product.controllers');
const ErrorHandler = require('./controllers/errorHandler.controller');
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        ProductController.get(req, res);
    } else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === 'GET') {
        ProductController.getById(req, res);
    } else if (req.url === '/api/products' && req.method === 'POST') {
        ProductController.create(req, res);
    } else {
        ErrorHandler.notFound(res);
    }
});
server.listen(PORT, () => {
    console.log(`run server on port ${PORT}\nhttp://localhost:${PORT}`);
});
