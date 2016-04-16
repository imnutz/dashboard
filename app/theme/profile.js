"use strict";

var h = require("snabbdom/h");
var common = require("./common");

var profileForm = function profileForm(title) {
    return h("div.card", [
        h("div.header", [
            h("h4.title", String(title))
        ]),
        h("div.content", [
            h("form", [
                h("div.row", [
                    h("div.col-md-5", [
                        common.textFormField("text", "company", "Creative Code Inc.", "Company (disabled)", "", "Company")
                    ]),

                    h("div.col-md-3", [
                        common.textFormField("text", "username", "michael23", "Username", "", "Username")
                    ]),

                    h("div.col-md-4", [
                        common.textFormField("email", "email", "", "Email address", "exampleInputEmail1", "Email")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-6", [
                        common.textFormField("text", "firstName", "Mike", "First name", "", "First name")
                    ]),
                    h("div.col-md-6", [
                        common.textFormField("text", "lastName", "Andrew", "Last name", "", "Last name")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-12", [
                        common.textFormField("text", "address", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", "Address", "", "Home address")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-4", [
                        common.textFormField("text", "city", "City", "City", "", "City")
                    ]),

                    h("div.col-md-4", [
                        common.textFormField("text", "country", "Country", "Country", "", "Country")
                    ]),

                    h("div.col-md-4", [
                        common.textFormField("number", "postal", "123", "Postal Code", "", "ZIP code")
                    ])
                ]),

                h("div.row", [
                    h("div.col-md-12", [
                        common.textAreaFormField("aboutMe", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", "About me", "", "Here can be your description")
                    ])
                ]),

                h("button.btn.btn-info.btn-fill.pull-right", "Update Profile"),
                h("div.clearfix")
            ])
        ])
    ])
};

var user = function user(fullName, nickname, description, avatar) {
    return h("div.card.card-user", [
        h("div.image", [
            h("img", {props:{src: avatar, alt:"..."}})
        ]),
        h("div.content", [
            h("div.author", [
                h("a", {props:{href:"#"}}, [
                    h("img.avatar.border-gray", {props:{src:"assets/img/faces/face-3.jpg", alt:"..."}}),
                    h("h4.title", [
                        h("span", String(fullName)),
                        h("br"),
                        h("small", String(nickname))
                    ])
                ])
            ]),
            h("p.description.text-center", String(description))
        ]),
        h("hr"),
        h("div.text-center", [
            h("button.btn.btn-simple", [
                h("i.fa.fa-facebook-square")
            ]),
            h("button.btn.btn-simple", [
                h("i.fa.fa-twitter")
            ]),
            h("button.btn.btn-simple", [
                h("i.fa.fa-google-plus-square")
            ])                      
        ])
    ]);
};

var profile = function profile() {
    return h("div.content", [
        h("div.container-fluid", [
            h("div.row", [
                h("div.col-md-8", [ profileForm("Edit Profile") ]),
                h("div.col-md-4", [ user("Ngoc Son", "sonngoc", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, nam.", "https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400") ])
            ])
        ])
    ]);
}

module.exports = { profile };