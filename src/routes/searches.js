const { Router } = require('express');
const router = Router();
const model = require('../models/Searches');
const Searches = require('../models/Searches');

router.route('/')
    .get(async (req, res) => {
        const searches = await model.find();
        res.json(searches);
    })
    .post(async (req, res) => {
        const { search } = req.body;
        const newSearch = new Searches({
            search: search
        })
    await newSearch.save();
    res.json({message: 'Búsqueda almacenada'});
    })
    .delete(async (req, res) => {
        await Searches.deleteMany();
        res.json([]);
    })

module.exports = router;