const ProductModel = require('../model/product.model');

// Get All Products
async function get(req, res) {
    try {
        const products = await ProductModel.getAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {}
}

// Create Product
async function create(req, res) {
    try {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const product = {
                id: Date.now(),
                ...JSON.parse(body)
            };
            const result = await ProductModel.create(product);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(result));
            res.end();
        });
    } catch (error) {}
}

// Get Product By id
async function getById(req, res) {
    try {
        const id = req.url.split('/')[3];
        const product = await ProductModel.getById(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(product));
        res.end();
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(
            JSON.stringify({
                message: 'Product Not Found!',
                status: 404
            })
        );
        res.end();
    }
}
const ProductController = {
    get,
    getById,
    create
};
module.exports = ProductController;
