"use strict";

var h = require("snabbdom/h");
var common = require("./common");

var headerPanel = function(actions) {
    return h("div.contacts-header", [
        h("form.form-inline", [
            common.textFormField("text", "criteria", "", "Search", "", "keyword"),
            common.buttonDefault("search", "Search"),
            common.buttonDefault("add", "Add new contact")
        ])
    ]);
};

var contactListHeader = function() {
    return h("thead", [
        h("tr", [
            h("th", "First name"),
            h("th", "Last name"),
            h("th")
        ])
    ]);
};

var contactRow = function(actions, contact) {
    return h("tr", [
        h("td", String(contact.firstName)),
        h("td", String(contact.lastName)),
        h("td", [
            common.buttonDefault("edit", "Edit"),
            common.buttonDefault("delete", "Delete")
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
    return h("div.contact-list.container-fluid", [
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

    return h("div.form.contact-form", [
        common.textFormField("text", "firstName", firstName, "First name", "firstName", ""),
        common.textFormField("text", "lastName", lastName, "Last name", "lastName", ""),
        common.buttonDefault("save", "Save"),
        common.buttonDefault("cancel", "Cancel")
    ])
};

module.exports = { contacts };
