const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const paths = require('./utils/paths')

const port = 3003;
const app = express();
const swaggerDocument = YAML.load(paths.spec('../build/openapi.yml'));

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});