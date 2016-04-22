"use strict";

var theme = require("../theme/theme");
var h = require("snabbdom/h");

var _actions,
    _view;

var init = function init(actions, view) {
    _actions = actions;
    _view = view;
};

var render = function render(data) {
    representation(data);
    nap(data);
};

var representation = function representation(data) {
    var content = theme.home.home();

    if(data.currentRoute === "contacts") {
        if(data.isAdd) {
            content = theme.contacts.contactForm({}, _actions.contacts, true);
        } else if(data.isEdit) {
            content = theme.contacts.contactForm(data.dsContact.contact || {}, _actions.contacts, false);
        } else {
            content = theme.contacts.contacts(data.dsContact.contacts, _actions.contacts);
        }
    } else if(data.currentRoute ===  "todo") {
        content = theme.todo.todo(data.todo.todos, data.todo.allCompleted, {
            activeItems: data.todo.activeItems
        }, _actions.todo);
    }

    var representation =  h("div.wrapper", [
        theme.sidebar.menu(data.menu, _actions.menu),
        h("div.main-panel", [
            theme.header.header(data.header.title),
            content,
            theme.footer.footer(data.footer)
        ])
    ]);   

    _view.display(representation);
};

var nap = function nap(data) {
    if(data.fetchingContacts) {
        _actions.contacts.fetchContacts();
    } else if(data.creatingContact) {
        _actions.contacts.createContact(data.dsContact.contact);
    } else if(data.contactCreated || data.contactUpdated || data.contactDeleted || data.cancelledContactCrud) {
        _actions.menu.selectRoute("contacts");
    } else if(data.fetchingContact) {
        _actions.contacts.fetchContact(data.editedContactId);
    } else if(data.updatingContact) {
        _actions.contacts.updateContact(data.dsContact.contact);
    } else if(data.deletingContact && data.okForDeleting) {
        _actions.contacts.deleteContact(data.deletedContactId);
    } else if(data.fetchingTodos) {
        _actions.todo.fetchTodos();
    }
};

module.exports = { init, render };