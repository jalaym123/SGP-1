const express = require('express');
const router = express.Router();
const { createTable, deleteTable, getTables } = require('../controllers/tableController');

router.route('/').get(getTables).post(createTable);
router.route('/:id').delete(deleteTable);

module.exports = router;