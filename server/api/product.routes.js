const express = require('express');
const queries = require('../db/queries');

const router = express.Router();

router.get('/', (req, res) => {
    queries.getAll().then(products => {
        res.json(products);
    });
});

router.get('/:id', (req, res, next) => {
    if (!isNaN(req.params.id)) {
        queries.getOne(req.params.id).then(item => {
            if (item) {
                res.json(item);
            } else {
                next();
            }
        })
    } else {
        const err = new Error("Invalid ID");
        next(err);
    }
});


module.exports = router;