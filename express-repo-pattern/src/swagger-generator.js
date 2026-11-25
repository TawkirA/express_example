const fs = require('fs');
const path = require('path');
const { deprecate } = require('util');
const YAML = require('yaml');
const schema = require('./schema');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'ABC',
        description: 'ABC API list'
    },
    basePath: '/api',
    paths: {},
    definitions: {}
}

schema.forEach((obj) => {
    const eName = obj.eName;
    const properties = obj.properties;
    const pKey = obj.pKey;

    // Generate CRUD routes
    swaggerDefinition.paths[`/${eName}`] = {
        get: {
          tags: [eName],
          operationId: `${eName}.getAll`,
          parameters: [],
          responses: {
            '200': {
               description: 'Request was successful',
               schema: {
                 type: 'array',
                 items: {
                   $ref: `#/definitions/${eName}`
                 }
               }
            }  
          },
          deprecated: false     
        },
        post: {
          tags: [eName],
          operationId: `${eName}.create`,
          parameters: [
            {
              name: 'data',
              in: 'body',
              required: true,
              schema: {
                $ref: `#/definitions/${eName}`
              }
            }
          ],
          responses: {
            '201': {
               description: 'Request was successful',
               schema: {
                 type: 'array',
                 items: {
                   $ref: `#/definitions/${eName}`
                 }    
               } 
            }    
          },
          deprecated: false
        },
        put: {
          tags: [eName],
          operationId: `${eName}.update`,
          parameters: [
            {
              name: 'data',
              in: 'body',
              required: true,
              schema: {
                $ref: `#/definitions/${eName}`
              }
            }
          ],
          responses: {
            '200': {
               description: 'Request was successful',
               schema: {
                 type: 'array',
                 items: {
                   $ref: `#/definitions/${eName}`
                 }    
               } 
            }    
          },
          deprecated: false
        },
        delete: {
          tags: [eName],
          operationId: `${eName}.delete`,
          parameters: [],
          responses: {
            '204': {
               description: 'Request was successful',
               schema: {
                 type: 'array',
                 items: {
                   $ref: `#/definitions/${eName}`
                 }
               }
            }  
          },
          deprecated: false   
        }
    };

    // swaggerDefinition.paths[`/${eName}/${pKey}`] = {
    //   get: {
    //     tags: [eName],
    //     operationId: `${eName}.get`,
    //     parameters: [
    //         {
    //           name: pKey,
    //           in: 'path',
    //           required: true,
    //           schema: {
    //             type: 'string'
    //           }
    //         }
    //     ],
    //     responses: {
    //       '200': {
    //          description: 'Request was successful',
    //          schema: {
    //            $ref: `#/definitions/${eName}`
    //          }
    //       }
    //     }
    //   },
    //   put: {
    //     tags: [eName],
    //     operationId: `${eName}.update`,
    //     parameters: [
    //       {
    //         name: pKey,
    //         in: 'path',
    //         required: true,
    //         schema: {
    //           type: 'string'
    //         }
    //       },
    //       {
    //         name: 'data',
    //         in: 'body',
    //         required: true,
    //         schema: {
    //           $ref: `#/definitions/${eName}`
    //         }
    //       }
    //     ],
    //     responses: {
    //       '200': {
    //          description: 'Request was successful',
    //          schema: {
    //            $ref: `#/definitions/${eName}`
    //          }
    //       }
    //     }
    //   },
    //   delete: {
    //     tags: [eName],
    //     operationId: `${eName}.delete`,
    //     parameters: [
    //       {
    //         name: pKey,
    //         in: 'path',
    //         required: true,
    //         schema: {
    //           type: 'string'
    //         }
    //       }
    //     ],
    //     responses: {
    //       '204': {
    //          description: 'Request was successful'
    //        }
    //     }
    //   }
    // };

    // Generate Definition
    swaggerDefinition.definitions[eName] = {
      type: 'object',
      properties: {},
      required: []   
    }

    Object.keys(properties).forEach((key) => {
        const property = properties[key];
        swaggerDefinition.definitions[eName].properties[key] = {
          type: property.type.toLowerCase(),          
          maxLength: property.length
        };
        if (property.required) {
          swaggerDefinition.definitions[eName].required.push(key);
        }
    });
});

// Write swagger YAML file
const swaggerContent = JSON.stringify(swaggerDefinition);
fs.writeFileSync('./definitions/swagger.json', swaggerContent);
