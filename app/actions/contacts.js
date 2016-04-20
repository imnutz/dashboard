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

contacts.fetchContact = function fetchContact(id) {
    var data = {};
    this.services
        .contacts
        .getContact(id)
        .then(function(response) {
            data.isEdit = true;
            data.fetchingContact = false;
            data.id = response.id;
            data.firstName = response.firstName;
            data.lastName = response.lastName;

            this.present(data);
        }.bind(this));
};

contacts.updateContact = function updateContact(contact) {
    var data = {};

    this.services
        .contacts
        .updateContact(contact)
        .then(function(response) {
            data.updatingContact = false;
            data.contactUpdated = true;

            this.present(data);
        }.bind(this));
};

contacts.deleteContact = function deleteContact(id) {
    var data = {};

    this.services
        .contacts
        .deleteContact(id)
        .then(function(response) {
            data.deletingContact = false;
            data.contactDeleted = true;

            this.present(data);
        }.bind(this));   
};

contacts.add = function showAddForm(data) {
    data = data || {};

    data.title = "Add new contact";
    data.isAdd = true;

    this.present(data);
};

contacts.edit = function showEditForm(id) {
    var data = {};

    data.isEdit = true;
    data.fetchingContact = true;
    data.editedContactId = id;
    data.title = "Edit contact";

    this.present(data);
};

contacts.update = function prepareUpdate(contact) {
    var data = {};

    data.updatingContact = true;
    data.id = contact.id;
    data.firstName = contact.firstName;
    data.lastName = contact.lastName;

    this.present(data);
};

contacts.save = function prepareCreating(data) {
    data = data || {};
    data.creatingContact = true;

    this.present(data);
};

contacts.delete = function prepareDeleting(id) {
    var data = {};

    data.deletedContactId = id;
    data.deletingContact = true;

    this.present(data);
};

contacts.cancel = function cancelCrud() {
    this.present({ cancelledCrud: true });
}

module.exports = contacts;