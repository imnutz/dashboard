"use strict";

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
    return _view.display(_view.ready(data, _actions));
};

var nap = function nap(data) {

};

module.exports = { init, render };