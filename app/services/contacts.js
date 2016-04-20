"use strict";
var reqwest = require("reqwest");
var common = require("./common");

var contactUrl = [common.serverUrl, "contacts"].join("/");

var getContacts = function getContacts() {
    return reqwest(contactUrl);
};

var createContact = function createContact(data) {
    return reqwest({
        url: contactUrl,
        method: "post",
        data: {
            firstName: data.firstName,
            lastName: data.lastName
        }
    });
};

module.exports = { getContacts, createContact };