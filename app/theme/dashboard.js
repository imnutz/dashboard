"use strict";

var h = require("snabbdom/h");

var emailLegends = [
    {
        title: "Open",
        iconClass: "fa fa-circle text-info"
    },
    {
        title: "Bounce",
        iconClass: "fa fa-circle text-danger"
    },
    {
        title: "Unsubscribe",
        iconClass: "fa fa-circle text-warning"
    }
];

var userBehaviorLegends = [
    {
        title: "Open",
        iconClass: "fa fa-circle text-info"
    },
    {
        title: "Click",
        iconClass: "fa fa-circle text-danger"
    },
    {
        title: "Click second time",
        iconClass: "fa fa-circle text-warning"
    }
];

var saleLegends = [
    {
        title: "Tesla Model S",
        iconClass: "fa fa-circle text-info"
    },
    {
        title: "BMW 5 Series",
        iconClass: "fa fa-circle text-danger"
    }   
];

var legend = function legend(legend) {
    return h("span", [
        h("i", {attrs:{class:legend.iconClass}}),
        h("span", String(legend.title))
    ])
};

var legends = function legends(legends) {
    return h("div.legend", legends.map(legend));
};

var emailStatistics = function emailStatistics() {
    return h("div.content", [
        h("div#chartPreferences.ct-chart.ct-perfect-fourth", ""),
        h("div.footer", [
            legends(emailLegends),
            h("hr"),
            h("div.stats", [
                h("i.fa.fa-clock-o"),
                h("span", "Campaign sent 2 days ago")
            ])
        ])
    ]);
};

var userBehavior = function userBehavior() {
    return h("div.content", [
        h("div#chartHours.ct-chart"),
        h("div.footer", [
            legends(userBehaviorLegends),
            h("hr"),
            h("div.stats", [
                h("i.fa.fa-history"),
                h("span", "Updated 3 minutes ago")
            ])
        ])
    ]);
};

var sales = function sales() {
    return h("div.content", [
        h("div#chartActivity.ct-chart"),
        h("div.footer", [
            legends(saleLegends),
            h("hr"),
            h("div.stats", [
                h("i.fa.fa-check"),
                h("span", "Data information certified")
            ])
        ])
    ]);
};

var tasks = function tasks() {
    return h("div.content", [
        h("div.table-full-width", [
        ])
    ])
};

var card = function card(title, category, content) {
    return h("div.card", [
        h("div.header", [
            h("h4.title", String(title)),
            h("p.category" , String(category))
        ]),
        content
    ]);
};

var dashboard = function dashboard() {
    return h("div.content", [
        h("div.container-fluid", [
            h("div.row", [
                h("div.col-md-4", [
                    card("Email Statistics", "Last Campaign Performance", emailStatistics())
                ]),

                h("div.col-md-8", [
                    card("User Behavior", "24 Hours performance", userBehavior())
                ])
            ]),
            h("div.row", [
                h("div.col-md-6", [
                    card("2014 Sales", "All products including Taxes", sales())
                ])
            ])
        ])
    ]);
};

module.exports = { dashboard };