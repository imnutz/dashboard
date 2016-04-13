"use strict";

let h = require("snabbdom/h");

const header = () => {
    return h("h1", "Header");
};

module.exports = { header };