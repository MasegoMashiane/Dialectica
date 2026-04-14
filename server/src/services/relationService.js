const relationRepo = require('../repositories/relationRepository');

const linkArguments = async (source, target, type) => {
    return await relationRepo.create({ source, target, type });
};

const getRelations = async (argumentId) => {
    return await relationRepo.findByArgument(argumentId);
};

module.exports = {
    linkArguments,
    getRelations
};