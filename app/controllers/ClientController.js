const ClientController = {
    index: async (req, res, next) => res.send([]),
    read: async (req, res, next) => res.send([]),
    create: async (req, res, next) => res.send({}),
    update: async (req, res, next) => res.send({}),
    delete: async (req, res, next) => res.send({}),
}

module.exports = ClientController;
