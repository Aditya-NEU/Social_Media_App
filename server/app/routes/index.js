'use strict';

const jwtRoute= require('./../routes/auth.routes');

module.exports = (app) => {
    jwtRoute(app);
};

