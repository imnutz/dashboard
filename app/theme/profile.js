"use strict";

let h = require("snabbdom/h");

const textFormField = (inputType, name, value, label, labelFor, placeholder) => {
    return h("div.form-group", [
        h("label", {props:{for:labelFor}}, label),
        h("input.form-control", {props:{type: inputType, placeholder: placeholder, value: value}})
    ]);
};

const textAreaFormField = (name, value, label, labelFor, placeholder) => {
    return h("div.form-group", [
        h("label", {props:{for:labelFor}}, label),
        h("textarea.form-control", {props:{rows: 5, placeholder: placeholder}}, String(value))
    ]);
};

const profileForm = (title) => {
    return h("div.card", [
        h("div.header", [
            h("h4.title", String(title))
        ]),
        h("div.content", [
            h("form", [
                h("div.row", [
                    h("div.col-md-5", [
                        textFormField("text", "company", "Creative Code Inc.", "Company (disabled)", "", "Company")
                    ]),

                    h("div.col-md-3", [
                        textFormField("text", "username", "michael23", "Username", "", "Username")
                    ]),

                    h("div.col-md-4", [
                        textFormField("email", "email", "", "Email address", "exampleInputEmail1", "Email")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-6", [
                        textFormField("text", "firstName", "Mike", "First name", "", "First name")
                    ]),
                    h("div.col-md-6", [
                        textFormField("text", "lastName", "Andrew", "Last name", "", "Last name")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-12", [
                        textFormField("text", "address", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", "Address", "", "Home address")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-4", [
                        textFormField("text", "city", "City", "City", "", "City")
                    ]),

                    h("div.col-md-4", [
                        textFormField("text", "country", "Country", "Country", "", "Country")
                    ]),

                    h("div.col-md-4", [
                        textFormField("number", "postal", "123", "Postal Code", "", "ZIP code")
                    ])                   
                ]),

                h("div.row", [
                    h("div.col-md-12", [
                        textAreaFormField("aboutMe", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", "About me", "", "Here can be your description")
                    ])
                ]),

                h("button.btn.btn-info.btn-fill.pull-right", "Update Profile"),
                h("div.clearfix")
            ])
        ])
    ])
};

const profile = () => {
    return h("div.content", [
        h("div.container-fluid", [
            h("div.row", [
                h("div.col-md-12", [ profileForm("Edit Profile") ])
            ])
        ])
    ]);
}

module.exports = { profile };