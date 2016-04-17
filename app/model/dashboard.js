"use strict";

var menu = require("./menu");
var header = require("./header");
var footer = require("./footer");
var legends = require("./legends");
var contact = require("./contacts");

// Model of application
var dashboard = {
    header: null,
    menu: null,
    footer: null,
    legends: null,
    contact: null,
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
    dashboard.contact = contact.init();
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

    if(dashboard.isAtContacts()) {
        dashboard.header.title = "Contacts";
        _services.contacts
                 .getContacts()
                 .then(function(response) {
                    dashboard.contact.contacts = response;
                    _render(dashboard);
                 });
    } else {
        _render(dashboard);
    }
};

module.exports = { init, present, setRender, setServices };
