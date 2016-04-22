"use strict";

var patch = require("snabbdom").init([
    require('snabbdom/modules/class'),
    require('snabbdom/modules/props'),
    require('snabbdom/modules/attributes'),
    require('snabbdom/modules/style'),
    require('snabbdom/modules/eventlisteners')
]);
var h = require("snabbdom/h");
var theme = require("../theme/theme");

var _vnode = document.querySelector("#app");

var init = function init(data, actions) {
    return ready(data, actions);
};

var ready = function ready(data, actions) {
    return h("div.wrapper", [
        theme.sidebar.menu(data.menu, actions.menu),
        h("div.main-panel", [
            theme.header.header(data.header.title),
            theme.home.home(),
            theme.footer.footer(data.footer)
        ])
    ]);
};

var display = function display(representation) {
    _vnode = patch(_vnode, representation);
};

module.exports = { init, ready, display };
