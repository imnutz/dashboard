"use strict";

var h = require("snabbdom/h");

var textFormField = function textFormField(inputType, name, value, label, labelFor, placeholder) {
    return h("div.form-group", [
        h("label", {props:{for:labelFor}}, label),
        h("input.form-control", {props:{type: inputType, placeholder: placeholder, value: value}})
    ]);
};

var textAreaFormField = function textAreaFormField(name, value, label, labelFor, placeholder) {
    return h("div.form-group", [
        h("label", {props:{for:labelFor}}, label),
        h("textarea.form-control", {props:{rows: 5, placeholder: placeholder}}, String(value))
    ]);
};

var buttonDefault = function(name, value) {
    return h("button.btn.btn-default", {props:{name:name}}, String(value));
};

module.exports = { 
    textFormField, 
    textAreaFormField,
    buttonDefault
};