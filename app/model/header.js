"use strict";

let Type = require("union-type");

let header = {
    title: "",
    leftNavMenu: [],
    rightNavMenu: []
};

const init = () => ({ title: "Dashboard", leftNavMenu: [], rightNavMenu: [] });

module.exports = { init };