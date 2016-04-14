"use strict";

let Type = require("union-type");

let Menu = require("./menu");
let Header = require("./header");

let dashboard = {
    header: null,
    menu: null,
    currentRoute: "home"
};

let _render;

const setRender = (render) => {
    _render = render;
};

const init = () => {
    return {
       header: Header.init(),
       menu: Menu.init() 
    }
};

const present = (data) => {
    if(data.route) {
        dashboard.currentRoute = data.route   
    }

    _render(dashboard);
};

module.exports = { init, present, setRender };