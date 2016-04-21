"use strict";

var h = require("snabbdom/h");
var common = require("./common");

var todoHeader = function todoHeader(actions) {
    return h("thead", [
        h("tr", [
            h("th", [
                h("input", {props:{type:"checkbox"}})
            ]),
            h("th", [
                h("input", {props:{type:"text"}})
            ])
        ])
    ]);
};

var todoListRow = function todoListRow(todo, actions) {
    return h("tr", [
        h("td", [
            h("input", {props:{type:"checkbox", checked:todo.completed, value: todo.id}})
        ]),
        h("td", String(todo.name)),
        common.buttonDefault("deleteTodo", "Delete")
    ]);
};

var todoList = function todoList(todos, actions) {
    return h("div.todo-list", [
        h("table.table", [
            todoHeader(actions),
            h("tbody", todos.map(todoListRow))
        ])
    ]);
};

var todoFooter = function todoFooter(footerInfo, actions) {
    return h("div.todo-footer", [
        h("span", footerInfo.activeItems + " items left")
    ]);
};

var todo = function todo(todos, footerInfo, actions) {
    return h("div.todo-app.content", [
        todoList(todos, actions),
        todoFooter(footerInfo, actions)
    ]);
};

module.exports = { todo };