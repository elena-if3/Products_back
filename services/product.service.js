const {
    models: { products },
} = require("../models");
const productRepository = require("../repositories/product.repository");
const serviceCallResult = require("../responses/serviceCallResult.response");

const findAll = async (filters) => {
    if (Object.keys(filters).length > 0) {
        const products = await productRepository.findFiltered(filters);
        return serviceCallResult.ok(products);
    }
    const products = await productRepository.findAll();
    return serviceCallResult.ok(products);
};

const findOneById = async (id) => {
    const product = await productRepository.findOneById(id);
    if (!product) {
        return serviceCallResult.notFound(`Product with id #${id} not found.`);
    }
    return serviceCallResult.ok(product);
};

const create = async (product = {}) => {
    const { code, nom, description, kcal } = product;
    let error = "A product must have a";

    if (code && nom && description && kcal) {
        await productRepository.create(product);
        return serviceCallResult.created();
    } else if (!code) {
        error = (error, "code,");
    } else if (!nom) {
        error = (error, "nom,");
    } else if (!description) {
        error = (error, "description,");
    } else if (!kcal) {
        error = (error, "kcal.");
    }
    return serviceCallResult.badRequest(error);
};

const update = async (id, newProduct = {}) => {
    const product = await productRepository.findOneById(id);
    if (!product) {
        return serviceCallResult.notFound(`Product with id #${id} not found.`);
    }
    await productRepository.update(product, newProduct);
    return serviceCallResult.noContent();
};

const remove = async (id) => {
    const product = await productRepository.findOneById(id);
    if (!product) {
        return serviceCallResult.notFound(`Product with id #${id} not found.`);
    }
    await productRepository.remove(product);
    return serviceCallResult.noContent();
};

module.exports = {
    findAll,
    findOneById,
    create,
    update,
    remove,
};
