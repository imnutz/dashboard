"use strict";

let h = require("snabbdom/h");

const navbarHeader = (title) => {
    return h("div.navbar-header", [
        h("button.navbar-toggle", {attrs:{"data-toggle":"collapse", "data-target":"#navgitation-example-2"}}, [
            h("span.sr-only", "Toggle navigation"),
            h("span.icon-bar"),
            h("span.icon-bar"),
            h("span.icon-bar")
        ]),
        h("a.navbar-brand", {props:{href:"#"}}, String(title))
    ]);
};

const navbarLeft = (toggleIcon) => {
    return h("ul.nav.navbar-nav.navbar-left", [
        h("li", [
            h("a.dropdown-toggle", {props:{href:"#"}, attrs:{"data-toggle":"dropdown"}}, [
                h("i", {attrs:{class:toggleIcon + " fa"}})                
            ])
        ]),
        h("li.dropdown", [
            h("a.dropdown-toggle", {attrs:{"data-toggle":"dropdown"}}, [
                h("i.fa.fa-globe"),
                h("b.caret"),
                h("span.notification", "5")
            ]),
            h("ul.dropdown-menu", [
                h("li", [ h("a", {props:{href:"#"}}, "Notification 1") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Notification 2") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Notification 3") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Notification 4") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Another notification") ])
            ])
        ]),
        h("li", [
            h("a", {props:{href:"#"}}, [
                h("i.fa.fa-search")
            ])
        ])
    ]);
};

const navbarRight = () => {
    return h("ul.nav.navbar-nav.navbar-right", [
        h("li", [
            h("a", {props:{href:"#"}}, "Account")
        ]),
        h("li.dropdown", [
            h("a.dropdown-toggle", {attrs:{"data-toggle":"dropdown"}}, [
                h("span", "Drowpdown"),
                h("b.caret"),
            ]),
            h("ul.dropdown-menu", [
                h("li", [ h("a", {props:{href:"#"}}, "Action") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Another action") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Something") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Another action") ]),
                h("li", [ h("a", {props:{href:"#"}}, "Something") ]),
                h("li.divider"),
                h("li", [ h("a", {props:{href:"#"}}, "Separated link") ])
            ])
        ]),
        h("li", [
            h("a", {props:{href:"#"}}, "Log out")
        ])       
    ]);
};

const navbarCollapse = () => {
    return h("div.collapse.navbar-collapse", [
        navbarLeft("fa-dashboard"),
        navbarRight()
    ])
};

const header = (title) => {
    return h("div.navbar.navbar-default.navbar-fixed", [
        h("div.container-fluid", [
            navbarHeader(title),
            navbarCollapse()
        ])
    ]);
};

module.exports = { header };