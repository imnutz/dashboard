"use strict";

let base = require("./base");

let menu = Object.create(base);

menu.selectRoute = (route) => {
    this.present({ route: route });
};

module.exports = menu;