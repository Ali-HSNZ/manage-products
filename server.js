const http = require('http');
const ProductController = require('./controllers/product.controllers');
const ErrorHandler = require('./controllers/errorHandler.controller');
const PORT = 5000;

const server = http.createServer((req, res) => {
    const apiRoute = 'api';
    const productRoute = `/${apiRoute}/products`;
    const singleProductReg = /\/api\/products\/[0-9]+/;
    const { url, method } = req;

    if (url === productRoute && method === 'GET') {
        ProductController.get(req, res);
    } else if (url.match(singleProductReg) && method === 'GET') {
        ProductController.getById(req, res);
    } else if (url.match(singleProductReg) && method === 'PUT') {
        ProductController.update(req, res);
    } else if (url.match(singleProductReg) && method === 'DELETE') {
        ProductController.remove(req, res);
    } else if (url === productRoute && method === 'POST') {
        ProductController.create(req, res);
    } else {
        ErrorHandler.notFound(res);
    }
});
server.listen(PORT, () => {
    console.log(`\nrun server on port ${PORT}\nURL : http://localhost:${PORT}\n\n`);
});
