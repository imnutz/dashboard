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

var contactRow = function(actions, contacts) {
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

module.exports = { contacts };
