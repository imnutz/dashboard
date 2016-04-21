"use strict";

var base = require("./base");

var menu = Object.create(base);

menu.selectProfile = function(data) {
    data = data || {};

    data.title = "User Profile";
    this.present(data);
};

menu.selectContacts = function(data) {
    data = data || {};

    data.title = "Contacts";
    data.fetchingContacts = true;
    this.present(data);
};

menu.selectTodo = function selectTodo(data) {
    data = data || {};
    data.title = "Todo List";
    data.fetchingTodos = true;
    this.present(data);
};

menu.selectRoute = function(route) {
    var data = {
        route: route,
        contactCreated: false,
        contactUpdated: false,
        contactDeleted: false,
        cancelledCrud: false
    };

    if(route === "profile") {
        menu.selectProfile(data);
    } else if(route === "contacts") {
        menu.selectContacts(data);
    } else if(route === "todo") {
        menu.selectTodo(data);
    }
};

module.exports = menu;