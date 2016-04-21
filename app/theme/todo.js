"use strict";

var h = require("snabbdom/h");
var common = require("./common");

var todoHeader = function todoHeader(actions) {
    return h("div.todo-header.form-inline", [
        h("input", {props:{type:"checkbox"}}),
        h("input", {props:{type:"text"}})
    ]);
};

var todoListRow = function todoListRow(todo, actions) {
    return h("tr", [
        h("td", [
            h("input", {props:{type:"checkbox"}})
        ]),
        h("td", String(todo.name)),
        common.buttonDefault("deleteTodo", "Delete")
    ]);
};

var todoList = function todoList(todos, actions) {
    return h("div.todo-list", [
        h("table.table", [
            h("tbody", todos.map(todoListRow))
        ])
    ]);
};

var todoFooter = function todoFooter(actions) {

};

var todo = function todo(todos, actions) {
    return h("div.todo-app", [
        todoHeader(actions),
        todoList(todos, actions),
        todoFooter(actions)
    ]);
};

module.exports = { todo };