"use strict";

var base = require("./base");

var menu = Object.create(base);

menu.selectRoute = function(route) {
    this.present({ route: route });
};

module.exports = menu;