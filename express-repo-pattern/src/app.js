const express = require('express');
const fs = require('fs');
const YAML = require('yaml');
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swagger-output.json');
const swaggerSpec = require('./swagger.json');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// connect DB
sequelize.sync().then(() => {
    console.log('DB Connected!');
    sequelize.sync();    
}).catch(err => {
    console.log('Error', err);
})

app.use('', (req, res) => {
    console.log('REQUEST - ', req);
})

// Load Routes
const routesDir = path.join(__dirname, 'routes');
fs.readdirSync(routesDir).forEach((file) => {
    console.log('FILE', file);
    // const route = require(path.join(routesDir, file));
    const route = require(`./routes/${file}`);
    console.log('ROUTES', route);
    const routePath = file.replace('.js', '').split('-')[0];
    app.use(`/api/${routePath}`, route);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
