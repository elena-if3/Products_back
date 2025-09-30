const {
    models: { products },
} = require("../models");
const { Op } = require("sequelize");

findAll = () => {
    return products.findAll();
};

findFiltered = (filters) => {
    const where = {};

    if (filters.code) {
        where.code = {};
        where.code[Op.iLike] = `%${filters.code}%`;
    }
    if (filters.nom) {
        where.nom = {};
        where.nom[Op.iLike] = `%${filters.nom}%`;
    }
    if (filters.keywords) {
        where.keywords = {};
        where.keywords[Op.iLike] = `%${filters.keywords}%`;
    }
    return products.findAll({
        where,
    });
};

findOneById = (id) => {
    return products.findByPk(id);
};

create = (product) => {
    return products.create(product);
};

update = (currentProduct, product) => {
    currentProduct.code = product.code ?? currentProduct.code;
    currentProduct.nom = product.nom ?? currentProduct.nom;
    currentProduct.description =
        product.description ?? currentProduct.description;
    currentProduct.keywords = product.keywords ?? currentProduct.keywords;
    currentProduct.kcal = product.kcal ?? currentProduct.kcal;

    return currentProduct.save();
};

remove = (product) => {
    return product.destroy();
};

module.exports = {
    findAll,
    findFiltered,
    findOneById,
    create,
    update,
    remove,
};
