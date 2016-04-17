"use strict";
var reqwest = require("reqwest");

var getContacts = function() {
    return reqwest("http://localhost:3000/contacts");
};

module.exports = { getContacts };