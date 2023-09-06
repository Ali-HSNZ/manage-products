const products = require('../data/products.json');
 
const fs = require('fs');
async function getAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}

async function create(product) {
    return new Promise((resolve, reject) => {
        products.push(product);
        fs.writeFile('./data/products.json', JSON.stringify(products), (err) => {
            if (err) reject(err);
            else resolve({ status: 201, message: 'product Added', data: product });
        });
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
    getById,
    create
};
module.exports = ProductModel;
