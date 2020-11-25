const express = require('express');
const router = express.Router();

const clientsRoutes = require('./api/clientes');

router.use('/clientes', clientsRoutes);


module.exports = router;