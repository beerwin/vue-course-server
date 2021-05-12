const ClientRepository = require('../repositories/ClientRepository');

const ClientController = {
    index: async (req, res, next) => res.send(await ClientRepository.index()),
    read: async (req, res, next) => res.send([]),
    create: async (req, res, next) => res.send({}),
    update: async (req, res, next) => res.send({}),
    delete: async (req, res, next) => res.send({}),
}

module.exports = ClientController;
