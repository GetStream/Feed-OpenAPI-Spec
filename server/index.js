const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const paths = require('./utils/paths')
const swaggerDocument = YAML.load(paths.spec('openapi.yml'));

const port = 3003;
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));