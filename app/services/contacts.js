"use strict";
var reqwest = require("reqwest");
var common = require("./common");

var contactUrl = [common.serverUrl, "contacts"].join("/");

var getContacts = function getContacts() {
    return reqwest(contactUrl);
};

var getContact = function getContact(id) {
    return reqwest([contactUrl, id].join("/"));
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

var updateContact = function updateContact(data) {
    return reqwest({
        url: [contactUrl, data.id].join("/"),
        method: "put",
        data: {
            firstName: data.firstName,
            lastName: data.lastName
        }
    });
};

var deleteContact = function deleteContact(id) {
    return reqwest({
        url: [contactUrl, id].join("/"),
        method: "delete"
    });
};
module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };