"use strict";

var main = require("./app/main");
var dashboard = require("./app/model/dashboard");
var actions = require("./app/actions/actions");
var state = require("./app/state/state");
var view = require("./app/state/view");

main.start(state, actions, dashboard, view);