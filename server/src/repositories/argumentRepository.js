const Argument = require('../models/Argument');

const create = async (data) => {
    return await Argument.create(data);
};

const findById = async (id) => {
    return await Argument.findById(id);
};

const findAll = async () => {
    return await Argument.find();
};

module.exports = {
    create,
    findById,
    findAll
};