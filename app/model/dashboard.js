"use strict";

var menu = require("./menu");
var header = require("./header");
var footer = require("./footer");
var legends = require("./legends");
var contact = require("./contacts");
var todo = require("./todo");

var contactService = require("../services/contacts");
var todoService = require("../services/todo");

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

    presentContact(data, _render);
    presentTodo(data);
};

var presentContact = function presentContact(data, render) {
    if(data.showContactList) {
        dashboard.contactUpdated = data.contactUpdated;
        dashboard.contactCreated = data.contactCreated;
        dashboard.contactDeleted = data.contactDeleted;
        dashboard.cancelledContactCrud = data.cancelledContactCrud;
        dashboard.isAddingContact = false;
        dashboard.isEdit = false;

        contactService
            .getContacts()
            .then(function(response) {
                dashboard.showContactList = false;
                dashboard.dsContact.contacts = response;
                render(dashboard);
            });
    } 

    if(data.isEdit) {
        dashboard.isEdit = data.isEdit;
        dashboard.editedContactId = data.editedContactId;
        contactService
            .getContact(dashboard.editedContactId)
            .then(function(response) {
                dashboard.showEditForm = false;
                dashboard.dsContact.contact = response;
                render(dashboard);
            });       
    }

    if(data.isAddingContact) {
        dashboard.isAddingContact = data.isAddingContact;
        render(dashboard);
    }
    
    if(data.updatingContact) {
        contactService
            .updateContact({
                id: data.id,
                firstName: data.firstName,
                lastName: data.lastName
            })
            .then(function(response) {
                dashboard.isEdit = false;
                dashboard.contactUpdated = true;
                render(dashboard);
            })
    }

    if(data.creatingContact) {
        contactService
            .createContact({
                firstName: data.firstName,
                lastName: data.lastName
            }) 
            .then(function(response) {
                dashboard.isAddingContact = false;
                dashboard.contactCreated = true;
                render(dashboard);
            });
    }

    if(data.deletingContact) {
        var confirmation = window.confirm("Do you really want to delete this contact");
        if(confirmation) {
            contactService
                .deleteContact(data.deletedContactId)
                .then(function() {
                    dashboard.contactDeleted = true;
                    render(dashboard);
                });
        }
    }

    if(data.cancelledContactCrud) {
        dashboard.cancelledContactCrud = data.cancelledContactCrud;
        render(dashboard);
    }
};

var presentTodo = function presentTodo(data) {
    dashboard.fetchingTodos = data.fetchingTodos;
    if(data.todos) {
        dashboard.todo.todos = data.todos;
    }

    if(data.checkedId) {
        dashboard.todo.todos.forEach(function(todo) {
            if(todo.id === Number(data.checkedId)) {
                todo.completed = !todo.completed;
                todo.active = !todo.active;
            }
        });
    }

    if(data.checkAll) {
        if(!dashboard.todo.allCompleted) {
            dashboard.todo.todos.forEach(function(todo) {
                todo.completed = true;
                todo.active = false;
            });
        } else {
            dashboard.todo.todos.forEach(function(todo) {
                todo.completed = false;
                todo.active = true;
            });
        }

        dashboard.todo.allCompleted = !dashboard.todo.allCompleted;
    }

    if(data.todoName) {
        var nextId = dashboard.todo.todos.length + 1;
        dashboard.todo.todos.push({
            id: nextId,
            name: data.todoName,
            active: true,
            completed: false
        });
    }

    if(data.deletedTodoId) {
        var filteredTodos = dashboard.todo.todos.filter(function(todo) {
            return todo.id != data.deletedTodoId;
        });

        dashboard.todo.todos = filteredTodos;
    }

    var activeTodos = dashboard.todo.todos.filter(function(todo) {
        return todo.active;
    });

    if(!activeTodos.length) {
        dashboard.todo.allCompleted = true;
    } else {
        dashboard.todo.allCompleted = false;
    }

    dashboard.todo.activeItems = activeTodos.length || 0;
};

module.exports = { init, present, setRender, setServices };
