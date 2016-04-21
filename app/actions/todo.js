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

module.exports = todo;