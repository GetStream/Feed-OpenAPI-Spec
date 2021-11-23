const express = require('express');
const swaggerUi = require('swagger-ui-express');
const path = require('path')
const YAML = require('yamljs');
const paths = require('./utils/paths');

const port = 3003;
const app = express();
const swaggerDocument = YAML.load(paths.spec('../build/openapi.yml'));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/',
    swaggerUi.serve,
    swaggerUi.setup(
        swaggerDocument,
        {
            customSiteTitle: 'Stream Activity Feeds | OpenAPI Spec',
            customfavIcon: 'favicon.ico',
            customCssUrl: 'style.css',
            customJs: 'custom.js',
        }
    )
);

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});