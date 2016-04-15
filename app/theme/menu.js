"use strict";

var h = require("snabbdom/h");

var logo = function logo() {
    return h("div.logo", [
        h("a.simple-text", {props:{href:"#"}}, "Dashboard")
    ]);
};

var menuItem = function menuItem(actions, item) {
    var itemHandler = function(evt) {
        evt.preventDefault();
        actions.selectRoute(item.route);
    };

    return h("li", {class:{active:item.active, "active-pro": item.activePro}}, [
        h("a", {props:{href:item.href}, on:{click: itemHandler}}, [
            h("i", {attrs:{class:item.iconClass}}),
            h("p", String(item.name))
        ])
    ]);
};

var menuItems = function menuItems(items, actions) {
    return h("ul.nav", items.map(menuItem.bind(actions, actions)));
};

var menu = function menu(items, actions) {
    return h("div.sidebar", {attrs:{"data-color":"purple", "data-image": "assets/img/sidebar-5.jpg"}}, [
        h("div.sidebar-wrapper", [
            logo(),
            menuItems(items, actions)
        ])
    ]);
};

module.exports = { menu };