const products = require('../data/products');

async function getAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}
async function getById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === Number(id));
        resolve(product);
    });
}

const ProductModel = {
    getAll,
    getById
};
module.exports = ProductModel;
