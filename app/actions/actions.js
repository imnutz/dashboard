"use strict";

var menu = require("./menu");
var contacts = require("./contacts");
var todo = require("./todo");

var init = function init(_present, _services) {
    menu.init(_present, _services);
    contacts.init(_present, _services);
    todo.init(_present, _services);
};

module.exports = { init, menu, contacts, todo };