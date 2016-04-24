"use strict";

var base = require("./base");

var contacts = Object.create(base);

contacts.add = function showAddForm(data) {
    data = data || {};

    data.title = "Add new contact";
    data.isAddingContact = true;

    this.present(data);
};

contacts.edit = function showEditForm(id) {
    var data = {};

    data.isEdit = true;
    data.showEditForm = true;
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
    this.present({ cancelledContactCrud: true });
}

module.exports = contacts;