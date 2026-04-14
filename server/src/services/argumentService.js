const argumentRepo = require('../repositories/argumentRepository');

const createArgument = async (data) => {
    return await argumentRepo.create(data);
};

const getArguments = async () => {
    return await argumentRepo.findAll();
};

module.exports = {
    createArgument,
    getArguments
};