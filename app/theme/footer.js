"use strict";

var h = require("snabbdom/h");

var footerMenuItem = function(item, actions) {
    return h("li", [
        h("a", {props:{href:"#"}}, String(item.name))
    ]);
};

var footerMenu = function(menu, actions) {
    return h("nav.pull-left", [
        h("ul", menu.map(footerMenuItem))
    ]);
};

var copyright = function() {
    return h("p.copyright.pull-right", [
        h("span", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quia."),
    ]);
};

var footer = function footer(menu, actions) {
    return h("div.footer", [
        h("div.container-fluid", [
            footerMenu(menu, actions),
            copyright()
        ])
    ]);
};

module.exports = { footer };