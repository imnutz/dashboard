"use strict";

let main = require("./app/main");
let dashboard = require("./app/model/dashboard");
let actions = require("./app/actions/actions");
let state = require("./app/state/state");
let view = require("./app/state/view");

main.start(state, actions, dashboard, view);