"use strict";

var reqwest = require("reqwest");
var common = require("./common");

var todoUrl = [common.serverUrl, "todos"].join("/");

var getTodos = function fetchTodos() {
    return reqwest(todoUrl);
}

module.exports = {
    getTodos
};