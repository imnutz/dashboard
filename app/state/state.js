"use strict";

let _actions,
    _view;

const init = (actions, view) => {
    _actions = actions;
    _view = view;
};

const render = (data) => {
    representation(data);
    nap(data);
};

const representation = (data) => {
    _view.display(data, _actions);
};

const nap = (data) => {

};

module.exports = { init, render };