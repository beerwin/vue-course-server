const express = require('express')
const router = express.Router();
const ClientController = require('../controllers/ClientController');

router.get('/', (req, res, next) => res.send("This is the api root."));

router.get('/clients', ClientController.index);
router.post('/clients', ClientController.create);
router.get('/clients/:client', ClientController.read);
router.put('/clients/:client', ClientController.update);
router.delete('/clients/:client', ClientController.delete);

module.exports = router;