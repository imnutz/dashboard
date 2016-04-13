"use strict";

let Type = require("union-type");

let Menu = require("./menu");
let Header = require("./header");

let Dashboard = Type({
    Dashboard: {
        header: [Header]
        sidebar: [Menu]
    }
});