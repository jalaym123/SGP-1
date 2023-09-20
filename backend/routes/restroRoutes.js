const express = require('express');
const router = express.Router();
const { getRestro, updateRestro } = require('../controllers/restroController');

router.route('/').get(getRestro).put(updateRestro);

module.exports = router;