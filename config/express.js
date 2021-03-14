const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = function () {
    let app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    consign({ cwd: 'app' }).then('routes').into(app);
    return app;
};
