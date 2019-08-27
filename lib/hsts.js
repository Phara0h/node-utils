'use strict';
const HSTS_HEADER_NAME = 'Strict-Transport-Security';

// equivalent to one year in seconds per recommendations at:
// https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html
const MAX_AGE_OF_HEADER = 31536000;

module.exports = function(req, res, next) {
    if (req.secure) {
        res.setHeader(HSTS_HEADER_NAME, `max-age=${MAX_AGE_OF_HEADER}; includeSubDomains`);
    }
    next();
};
