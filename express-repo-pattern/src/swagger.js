const swaggerJsdoc = require('swagger-jsdoc');
const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Node Express API',
//             version: '1.0.0'
//         },
//         servers: [
//             {
//                 url: 'http://localhost:3000',
//             },
//         ],
//     },
//     apis: ['./routes/*.js']
// };

const doc = {
  info: {
    version: '',            // by default: '1.0.0'
    title: '',              // by default: 'REST API'
    description: ''         // by default: ''
  },
  servers: [
    {
      url: '',              // by default: 'http://localhost:3000'
      description: ''       // by default: ''
    },
    // { ... }
  ],
  tags: [                   // by default: empty Array
    {
      name: '',             // Tag name
      description: ''       // Tag description
    },
    // { ... }
  ],
  components: {}            // by default: empty object
};

const outputFile = './swagger-output.json';
const routes = ['./routes/*.js'];

// const swaggerSpec = swaggerJsdoc(options);
const swaggerSpec = swaggerAutogen(outputFile, routes, doc);
// module.exports = swaggerSpec;