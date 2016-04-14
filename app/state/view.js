"use strict";

let patch = require("snabbdom").init([
    require('snabbdom/modules/class'),
    require('snabbdom/modules/props'),
    require('snabbdom/modules/attributes'),
    require('snabbdom/modules/style'),
    require('snabbdom/modules/eventlisteners')
]);
let h = require("snabbdom/h");
let theme = require("../theme/theme");

let _vnode = document.querySelector("#app");

const init = (data, actions) => {
    return ready(data, actions);
};

const ready = (data, actions) => {
    return h("div.wrapper", [
        theme.sidebar.menu(data.menu, actions.menu),
        h("div.main-panel", [
            theme.header.header("Lorem ipsum dolor sit."),
            theme.home.dashboard()
        ])
    ]);
};

const display = (representation) => {
    _vnode = patch(_vnode, representation);
};

module.exports = { init, ready, display };