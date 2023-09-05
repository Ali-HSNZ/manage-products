const ProductModel = require('../model/product.model');
async function get(req, res) {
    try {
        const products = await ProductModel.getAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {}
}

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
    getById
};
module.exports = ProductController;
