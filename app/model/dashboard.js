"use strict";

var menu = require("./menu");
var header = require("./header");
var footer = require("./footer");

// Model of application
var dashboard = {
    header: null,
    menu: null,
    footer: null,
    currentRoute: "home",

    isAtProfile: function atProfile() {
        return this.currentRoute === "profile";
    }
};

var _render;

var setRender = function setRender(render) {
    _render = render;
};

var init = function init() {
    dashboard.header = header.init();
    dashboard.menu = menu.init();
    dashboard.footer = footer.init();

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

    _render(dashboard);
};

module.exports = { init, present, setRender };