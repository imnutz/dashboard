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

menu.selectRoute = function(route) {
    var data = {
        route: route
    };

    if(route === "profile") {
        menu.selectProfile(data);
    } else if(route === "contacts") {
        menu.selectContacts(data);
    }
};

module.exports = menu;