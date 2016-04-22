"use strict";

var base = require("./base");

var todo = Object.create(base);

todo.fetchTodos = function actFetchTodos() {
    var data = {};

    this.services
        .todo
        .getTodos()
        .then(function(response) {
            data.fetchingTodos = false;
            data.todos = response;

            this.present(data);
        }.bind(this));
};

todo.checkedTodo = function checkedTodo(id) {
    var data = {
        checkedId: id
    };

    this.present(data);
};

todo.checkedAll = function checkAll() {
    var data = {
        checkAll: true
    };

    this.present(data);
};

todo.addTodo = function addTodo(todoName) {
    this.present({ todoName: todoName });
};

todo.deleteTodo = function deleteTodo(id) {
    this.present({ deletedTodoId: id });
};

module.exports = todo;