// server/data/categories/1-categories.js

const { getObjectId } = require('mongo-seeding')

module.exports = [
  {
    _id: getObjectId('gene-expression'),
    slug: 'gene-expression',
    name: 'Gene-expression',
  },
] 