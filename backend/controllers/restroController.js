const asyncHandler = require('express-async-handler');
const restroModel = require('../models/Restaurant');

//@desc get restro details
//@route GET /api/restro
//@access public
const getRestro = asyncHandler(async (_req, res) => {
    let restro = await restroModel.findOne({ id: 1 });
    if (!restro) {
        restro = new restroModel();
        await restro.save();
    }
    res.json(restro)
})

//@desc update the restro details
//@route PUT /api/restro
//@access public
const updateRestro = asyncHandler(async (req, res) => {
    const restro = await restroModel.findOneAndUpdate({ id: 1 }, req.body, { new: true });
    res.json(restro)
})

module.exports = { getRestro, updateRestro }