const express = require('express');
const queries = require('../db/queries');

const router = express.Router();


function getProductFromBody(body) {
    const {
        title,
        description,
        price,
        quantity,
        img_url
    } = body;
    let product = {
        title,
        description,
        price,
        quantity,
        img_url
    };

    return product;
}


function validProduct(product) {
    const {
        title,
        price,
        quantity
    } = product;
    return (typeof title == 'string' && title.trim() != '' && !isNaN(price) && price > 0 && Number.isInteger(quantity) && quantity > 0);
}

function validID(req, res, next) {
    if (!isNaN(req.params.id)) {
        next();
    } else {
        const err = new Error("Invalid ID");
        next(err);
    }
}

function validProductMiddleware(req, res, next) {
    if (validProduct(req.body)) {
        next();
    } else {
        const err = new Error('invalid item');
        next(err);
    }
}

router.put('/:id', validID, validProductMiddleware, (req, res) => {
    const product = getProductFromBody(req.body);
    queries.update(req.params.id, product).then(() => {
        res.json({
            message: "product updated"
        })
    });
});

router.get('/', (req, res) => {
    queries.getAll().then(products => {
        res.json(products);
    });
});

router.get('/:id', validID, (req, res, next) => {
    queries.getOne(req.params.id).then(item => {
        if (item) {
            res.json(item);
        } else {
            next();
        }
    })
});

router.post('/', validProductMiddleware, (req, res) => {
    const product = getProductFromBody(req.body);

    queries.create(product).then(id => {
        res.json({
            id
        });
    });
});

router.delete('/:id', validID, (req, res) => {
    queries.delete(req.params.id).then(response => {
        res.json({
            message: 'Product deleted!'
        })
    });
});

module.exports = router;