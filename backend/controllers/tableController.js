const asyncHandler = require('express-async-handler');
const tableModel = require('../models/Table');

//@desc get restro details
//@route POST /api/tables
//@access public
const getTables = asyncHandler(async (_, res) => {
    const tables = await tableModel.find();
    res.json(tables);
})

//@desc get restro details
//@route POST /api/tables
//@access public
const createTable = asyncHandler(async (req, res) => {
    const { tableNo, capacity } = req.body;
    let table = new tableModel({ tableNo, capacity })
    await table.save()
    res.json(table)
})

//@desc delete the table
//@route DELETE /api/tables/:id
//@access public
const deleteTable = asyncHandler(async (req, res) => {
    const restro = await tableModel.findOneAndDelete({ tableNo: req.params.id });
    res.json(restro)
})

module.exports = { getTables, deleteTable, createTable }