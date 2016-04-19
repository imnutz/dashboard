"use strict";

var theme = require("../theme/theme");
var h = require("snabbdom/h");

var _actions,
    _view;

var init = function init(actions, view) {
    _actions = actions;
    _view = view;
};

var render = function render(data) {
    representation(data);
    nap(data);
};

var representation = function representation(data) {
    var content = theme.home.dashboard(data.legends);

    if(data.currentRoute === "contacts") {
        content = theme.contacts.contacts(data.contact.contacts, _actions.contacts);
    }

    var representation =  h("div.wrapper", [
        theme.sidebar.menu(data.menu, _actions.menu),
        h("div.main-panel", [
            theme.header.header(data.header.title),
            content,
            theme.footer.footer(data.footer)
        ])
    ]);   

    _view.display(representation);
};

var nap = function nap(data) {
    if(data.fetchingContacts) {
        _actions.contacts.fetchContacts();
    }
};

module.exports = { init, render };