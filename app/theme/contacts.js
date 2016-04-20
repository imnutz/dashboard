"use strict";

var h = require("snabbdom/h");
var common = require("./common");

var headerPanel = function headerPanel(actions) {
    return h("div.contacts-header", [
        h("div.form-inline", [
            common.textFormField("text", "criteria", "", "Search", "", "keyword"),
            common.buttonDefault("search", "Search"),
            common.buttonDefault("add", "Add new contact", actions.add.bind(actions))
        ])
    ]);
};

var contactListHeader = function contactListHeader() {
    return h("thead", [
        h("tr", [
            h("th", "First name"),
            h("th", "Last name"),
            h("th")
        ])
    ]);
};

var contactRow = function(actions, contact) {
    var editHandler = function(evt) {
        evt.preventDefault();
        actions.edit(contact.id)
    };

    var deleteHandler = function(evt) {
        evt.preventDefault();
        actions.delete(contact.id);
    };

    return h("tr", [
        h("td", String(contact.firstName)),
        h("td", String(contact.lastName)),
        h("td", [
            common.buttonDefault("edit", "Edit", editHandler),
            common.buttonDefault("delete", "Delete", deleteHandler)
        ])
    ]);
};

var contactListBody = function(contacts, actions) {
    return h("tbody", contacts.map(contactRow.bind(null, actions)));
};

var contactList = function(contacts, actions) {
    return h("div.contact-list", [
        h("table.table", [
            contactListHeader(),
            contactListBody(contacts, actions)
        ])
    ]);
};

var contacts = function contacts(contacts, actions) {
    return h("div.content.contact-list.container-fluid", [
        headerPanel(actions),
        contactList(contacts, actions)
    ]);
};

var contactForm = function(contact, actions, isNew) {
    var firstName = contact.firstName || "",
        lastName = contact.lastName || "";

    function setFirstName(evt) {
        firstName = evt.target.value;
    }

    function setLastName(evt) {
        lastName = evt.target.value;
    }

    function crudHandler(evt) {
        evt.preventDefault();

        var handler = isNew ? actions.save : actions.update;

        handler.call(actions, {
            id: contact.id,
            firstName: firstName,
            lastName: lastName
        });
    }

    function cancel(evt) {
        evt.preventDefault();
        actions.cancel();
    }

    return h("div.form.content.contact-form.container-fluid", [
        common.textFormField("text", "firstName", firstName, "First name", "firstName", "", setFirstName),
        common.textFormField("text", "lastName", lastName, "Last name", "lastName", "", setLastName),
        common.buttonDefault("save", "Save", crudHandler),
        common.buttonDefault("cancel", "Cancel", cancel)
    ]);
};

module.exports = { contacts, contactForm };
