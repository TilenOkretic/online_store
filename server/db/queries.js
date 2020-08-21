const connection = require('./connection');

let table_name = 'product';

module.exports = {
    getAll() {
        return connection(table_name);
    },
    getOne(id) {
        return connection(table_name).where('id', id).first();
    },
    create(product) {
        return connection(table_name).insert(product, 'id').then(ids => {
            return ids[0];
        });
    },
    update(id, product) {
        return connection(table_name).where('id', id).update(product);
    },
    delete(id) {
        return connection(table_name).where('id', id).del();
    }
};