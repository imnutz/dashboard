"use strict";

var base = require("./base");

var contacts = Object.create(base);

contacts.fetchContacts = function() {
    var data = {};
    this.services
        .contacts
        .getContacts()
        .then(function(response) {
            data.contacts = response;
            data.fetchingContacts = false;
            this.present(data);
        }.bind(this));
};

module.exports = contacts;