"use strict";

let Type = require("union-type");

let Header = Type({
    Header: {
        title: String,
        leftNavMenu: Array,
        rightNavMenu: Array
    }
});

module.exports = Header;