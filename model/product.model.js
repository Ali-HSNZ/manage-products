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

async function remove(id) {
    return new Promise((resolve, reject) => {
        const newProducts = products.filter((product) => product.id !== Number(id));
        fs.writeFile('./data/products.json', JSON.stringify(newProducts), (err) => {
            if (err) reject(err);
            else resolve({ status: 200, message: 'product deleted' });
        });
    });
}

async function update(id, payload) {
    return new Promise((resolve, reject) => {
        products.map((product) => {
            if (product.id == id) {
                Object.assign(product, payload);
            }
            return product;
        });
        fs.writeFile('./data/products.json', JSON.stringify(products), (err) => {
            if (err) reject(err);
            else resolve({ status: 200, message: 'Update Product Successfully' });
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
    create,
    update,
    remove
};
module.exports = ProductModel;
