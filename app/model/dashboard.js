"use strict";

var menu = require("./menu");
var header = require("./header");
var footer = require("./footer");
var legends = require("./legends");
var contact = require("./contacts");
var todo = require("./todo");

// Model of application
var dashboard = {
    header: null,
    menu: null,
    footer: null,
    legends: null,
    contact: null,
    todo: null,
    currentRoute: "home",

    isAtProfile: function atProfile() {
        return this.currentRoute === "profile";
    },

    isAtContacts: function atContacts() {
        return this.currentRoute === "contacts";
    }
};

var _render,
    _services;

var setRender = function setRender(render) {
    _render = render;
};

var setServices = function(services) {
    _services = services;
};

var init = function init() {
    dashboard.header = header.init();
    dashboard.menu = menu.init();
    dashboard.footer = footer.init();
    dashboard.dsContact = contact.init();
    dashboard.todo = todo.init();
    dashboard.legends = legends;

    return dashboard;
};

var activeMenuItem = function activeMenu(menu, route) {
    return menu.map(function(item) {
        item.active = (item.route === route) ? true : false;

        return item;
    });
};

var present = function present(data) {
    if(data.route) {
        dashboard.currentRoute = data.route
        dashboard.menu = activeMenuItem(dashboard.menu, data.route);
    }

    if(data.title) {
        dashboard.header.title = data.title
    }

    if (data.contacts) {
        dashboard.dsContact.contacts = data.contacts;
    }

    dashboard.isAdd = data.isAdd;
    dashboard.fetchingContacts = data.fetchingContacts;

    dashboard.creatingContact = data.creatingContact;
    dashboard.contactCreated = data.contactCreated;

    dashboard.isEdit = data.isEdit;
    dashboard.fetchingContact = data.fetchingContact;
    dashboard.editedContactId = data.editedContactId;
    dashboard.updatingContact = data.updatingContact;
    dashboard.contactUpdated = data.contactUpdated;

    dashboard.deletingContact = data.deletingContact;
    dashboard.deletedContactId = data.deletedContactId;
    dashboard.contactDeleted = data.contactDeleted;

    dashboard.cancelledContactCrud = data.cancelledContactCrud;

    if(dashboard.deletingContact && dashboard.deletedContactId) {
        var confirmation = window.confirm("Do you really want to delete this contact");
        if(confirmation) {
            dashboard.okForDeleting = true;
        } else {
            dashboard.okForDeleting = false;
        }
    }

    dashboard.dsContact.contact = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName
    };

    presentTodo(data);
    
    _render(dashboard);
};

var presentTodo = function presentTodo(data) {
    dashboard.fetchingTodos = data.fetchingTodos;
    dashboard.todo.todos = data.todos || [];

    var activeTodos = dashboard.todo.todos.filter(function(todo) {
        return todo.active;
    });

    dashboard.todo.activeItems = activeTodos.length || 0;
};

module.exports = { init, present, setRender, setServices };
