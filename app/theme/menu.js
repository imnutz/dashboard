"use strict";

let h = require("snabbdom/h");

const logo = () => {
    return h("div.logo", [
        h("a.simple-text", {props:{href:"#"}}, "Dashboard")
    ]);
};

const menuItem = (actions, item) => {
    let itemHandler = (evt) => {
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

const menuItems = (items, actions) => {
    return h("ul.nav", items.map(menuItem.bind(actions, actions)));
};

const menu = (items, actions) => {
    return h("div.sidebar", {attrs:{"data-color":"purple", "data-image": "assets/img/sidebar-5.jpg"}}, [
        h("div.sidebar-wrapper", [
            logo(),
            menuItems(items, actions)
        ])
    ]);
};

module.exports = { menu };