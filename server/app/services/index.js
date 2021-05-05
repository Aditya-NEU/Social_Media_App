'use strict';
const authJwt = require("./authJWT");
const verifySignUp = require("./verifySignUp");

/**
 * Extracting data from the folders.
 */

module.exports = {
  authJwt,
  verifySignUp
};