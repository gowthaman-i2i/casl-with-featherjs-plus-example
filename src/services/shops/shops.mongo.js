
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `shops`. (Can be re-generated.)
const merge = require('lodash.merge');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      name: {
        bsonType: "string"
      },
      organizationId: {
        ref: "organizations",
        bsonType: "objectId"
      },
      createdBy: {
        ref: "users",
        bsonType: "objectId"
      },
      updatedBy: {
        ref: "users",
        bsonType: "objectId"
      }
    },
    required: [
      "name"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
