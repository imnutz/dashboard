"use strict";

let h = require("snabbdom/h");

const logo = () => {
    return h("div.logo", [
        h("a.simple-text", {props:{href:"#"}}, "Dashboard")
    ]);
};

const menuItem = (item) => {
    return h("li", {class:{active:item.active}}, [
        h("a", {props:{href:item.href}}, [
            h("i", {props:{class:item.iconClass}}),
            h("p", String(item.name))
        ])
    ]);
};

const menuItems = (items) => {
    return h("ul.nav", items.map(menuItem));
};

const menu = (items) => {
    return h("div.sidebar-wrapper", [
        logo(),
        menuItems(items)
    ]);
};

module.exports = { menu };