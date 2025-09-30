const productService = require("../services/product.service");
const apiCallResult = require("../responses/apiCallResult.response");

const findAll = async (req, res) => {
    const result = await productService.findAll(req.query);
    return apiCallResult(res, result);
};

const findOne = async (req, res) => {
    const result = await productService.findOneById(req.params.id);
    return apiCallResult(res, result);
};

const create = async (req, res) => {
    const result = await productService.create(req.body);
    return apiCallResult(res, result);
};

const update = async (req, res) => {
    const result = await productService.update(req.params.id, req.body);
    return apiCallResult(res, result);
};

const remove = async (req, res) => {
    const result = await productService.remove(req.params.id);
    return apiCallResult(res, result);
};

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove,
};
