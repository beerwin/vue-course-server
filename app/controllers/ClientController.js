const ClientRepository = require('../repositories/ClientRepository');

const ClientController = {
    index: async (req, res, next) => res.send(await ClientRepository.index()),
    read: async (req, res, next) => {
        const item = await ClientRepository.read(req.params.client);
        if (!item) {
            res.sendStatus(404);
            return;
        }

        res.send(item);
    },
    create: async (req, res, next) => {
        // res.sendStatus(201);
        // TODO: return the id got from create
        res.status(201).send({id: ClientRepository.create(req.body)});
    },
    update: async (req, res, next) => {
        let item = await ClientRepository.read(req.params.client);
        if (!item) {
            res.sendStatus(404);
            return;
        }
        item = {...item, ...req.body, id: req.params.client}
        await ClientRepository.update(req.params.client, item);
        res.sendStatus(200);
    },
    delete: async (req, res, next) => {
        await ClientRepository.delete(req.params.client);
        res.sendStatus(200);
    },
}

module.exports = ClientController;
