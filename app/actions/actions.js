"use strict";

let menu = require("./menu");

const init = function init(_present) {
    menu.init(_present);
};

module.exports = { init, menu };