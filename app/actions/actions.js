"use strict";

var menu = require("./menu");
var contacts = require("./contacts");

var init = function init(_present) {
    menu.init(_present);
    contacts.init(_present);
};

module.exports = { init, menu, contacts };