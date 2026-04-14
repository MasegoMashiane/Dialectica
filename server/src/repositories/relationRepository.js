const Relation = require('../models/relationModel');

const create = async (data) => {
    return await Relation.create(data);
};

const findByArgument = async (argumentId) => {
    return await Relation.find({
        $or: [{ source: argumentId }, { target: argumentId }]
    });
};

module.exports = {
    create,
    findByArgument
};