"use strict";

var base = require("./base");

var contacts = Object.create(base);

contacts.fetchContacts = function fetchingContacts() {
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

contacts.createContact = function createContact(contact) {
    var data = {};

    this.services
        .contacts
        .createContact(contact)
        .then(function(response) {
            data.creatingContact = false;
            data.contactCreated = true;

            this.present(data);
        }.bind(this));
};

contacts.add = function showAddForm(data) {
    data = data || {};

    data.title = "Add new contact";
    data.isAdd = true;

    this.present(data);
};

contacts.save = function saveContact(data) {
    data = data || {};
    data.creatingContact = true;

    this.present(data);
};

module.exports = contacts;