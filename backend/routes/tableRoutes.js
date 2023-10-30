const express = require('express');
const router = express.Router();
const { createTable, deleteTable, getTables, getTable } = require('../controllers/tableController');

router.route('/guests/:id').get(getTable);
router.route('/').get(getTables).post(createTable);
router.route('/:id').delete(deleteTable);

module.exports = router;