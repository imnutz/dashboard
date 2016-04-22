"use strict";

var h = require("snabbdom/h");
var common = require("./common");

var todoHeader = function todoHeader(shouldCheck, actions) {
    var todoName = "";

    var checkboxHandler = function(evt) {
        actions.checkedAll();
    };

    var setTodoName = function(evt) {
        todoName = evt.target.value;
    };

    var keyHandler = function(evt) {
        if(evt.keyCode === 13) {
            actions.addTodo(todoName)
        }
    };

    return h("thead", [
        h("tr", [
            h("th", [
                h("input", {props:{type:"checkbox", checked:shouldCheck}, on:{change:checkboxHandler}})
            ]),
            h("th", [
                h("input", {props:{type:"text"}, on:{change:setTodoName, keyup:keyHandler}})
            ])
        ])
    ]);
};

var todoListRow = function todoListRow(actions, todo) {
    var checkboxHandler = function(evt) {
        actions.checkedTodo(evt.target.value);
    };

    var deleteHandler = function(id, evt) {
        actions.deleteTodo(id);
    };

    return h("tr", [
        h("td", [
            h("input", {props:{type:"checkbox", checked:todo.completed, value: todo.id}, on:{change:checkboxHandler}})
        ]),
        h("td", String(todo.name)),
        common.buttonDefault("deleteTodo", "Delete", deleteHandler.bind(null, todo.id))
    ]);
};

var todoList = function todoList(todos, allCompleted, actions) {
    return h("div.todo-list", [
        h("table.table", [
            todoHeader(allCompleted, actions),
            h("tbody", todos.map(todoListRow.bind(null, actions)))
        ])
    ]);
};

var todoFooter = function todoFooter(footerInfo, actions) {
    return h("div.todo-footer", [
        h("span", footerInfo.activeItems + " items left")
    ]);
};

var todo = function todo(todos, allCompleted, footerInfo, actions) {
    return h("div.todo-app.content", [
        todoList(todos, allCompleted, actions),
        todoFooter(footerInfo, actions)
    ]);
};

module.exports = { todo };