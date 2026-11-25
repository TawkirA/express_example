const fs = require('fs');
const path = require('path');
const schema = require('./schema');

const templateDir = path.join(__dirname, 'templates');
const outputDir = path.join(__dirname, 'src');

schema.forEach((schemaDefinition) => {
    const modelName = schemaDefinition.eName;
    fs.appendFile(path.join(__dirname, 'models', `${modelName}.js`), '', function(err) {
        if (err) throw err;
        console.log('Created!');
    });
    const modelPath = path.join(__dirname, 'models', `${modelName}.js`);
    const repositoryPath = path.join(__dirname, 'repositories', `${modelName}Repository.js`);
    const controllerPath = path.join(__dirname, 'controllers', `${modelName}Controller.js`);
    const routePath = path.join(__dirname, 'routes', `${modelName}-routes.js`);

    // Generate model file
    const modelTemplate = fs.readFileSync(path.join(templateDir, 'model.template'), 'utf-8');
    let modelContent = modelTemplate.replace(/{{modelName}}/g, modelName);


    const props = [];
    for (const [key, value] of Object.entries(schemaDefinition.properties)) {    
        console.log(`${key}: ${value}`);
        value.name = `${key}`;        
        
        props.push(value);        
    }

    console.log('OBJ', props);
    // Add fields and properties to model
    const fields = props.map((field) => {
        return `${field.name}: { type: ${field.type}, allowNull: ${field.required}, len: [0, ${field.length}] }`;
    }).join(',\n');
    
      
    // const fields = Object.entries(schemaDefinition.fields)
    //     .map(([key, value]) => `${key}: { type: Sequelize.${value} }`)
    //     .join(',\n  ');

    modelContent = modelContent.replace('{{fields}}', fields);
    fs.writeFileSync(modelPath, modelContent);

    // Generate repository file
    const repositoryTemplate = fs.readFileSync(path.join(templateDir, 'repository.template'), 'utf8');
    const repositoryContent = repositoryTemplate.replace(/{{modelName}}/g, modelName);
    fs.writeFileSync(repositoryPath, repositoryContent);

    // Generate controller file
    const controllerTemplate = fs.readFileSync(path.join(templateDir, 'controller.template'), 'utf8');
    const controllerContent = controllerTemplate.replace(/{{modelName}}/g, modelName);
    fs.writeFileSync(controllerPath, controllerContent);

    // Generate route file
    const routeTemplate = fs.readFileSync(path.join(templateDir, 'route.template'), 'utf8');
    const routeContent = routeTemplate.replace(/{{modelName}}/g, modelName);
    fs.writeFileSync(routePath, routeContent);
    


});