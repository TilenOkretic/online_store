const Knex = require('knex');


const table_names = {
    product: 'product'
}
/**
 * 
 * @param {Knex} knex 
 */
exports.up = function (knex) {
    return knex.schema.createTableIfNotExists(table_names.product, (table) => {
        table.increments();
        table.string('title').notNullable();
        table.text('discription');
        table.decimal('price').notNullable();
        table.integer('quantity').unsigned().notNullable();
        table.string('img_url');
    });
};

/**
 * 
 * @param {Knex} knex 
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists(table_names.product);
};