"use strict";

var menu = require("./menu");

var init = function init(_present) {
    menu.init(_present);
};

module.exports = { init, menu };