const Knex = require('knex');
const products = require('../products');


const table_names = {
  product: 'product'
}

/**
 * @param {Knex} knex 
 */
exports.seed = function (knex) {
  return knex(table_names.product).del()
    .then(function () {
      return knex(table_names.product).insert(products);
    });
};