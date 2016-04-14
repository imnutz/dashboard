"use strict";

let Type = require("union-type");

let Menu = require("./menu");
let Header = require("./header");

let Dashboard = {
    header: null,
    menu: null
};

const init = (render) => {
    return {
       header: Header.init(),
       menu: Menu.init() 
    }
};

const present = (data) => {

};

module.exports = { init, present };