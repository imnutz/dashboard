"use strict";

let h = require("snabbdom/h");

const emailLegends = [
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

const userBehaviorLegends = [
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

const saleLegends = [
    {
        title: "Tesla Model S",
        iconClass: "fa fa-circle text-info"
    },
    {
        title: "BMW 5 Series",
        iconClass: "fa fa-circle text-danger"
    }   
];

const legend = (legend) => {
    return h("i", {props:{class:legend.iconClass}}, String(legend));
};

const legends = (legends) => {
    return h("div.legend", legends.map(legend));
};

const emailStatistics = () => {
    return h("div.content", [
        h("div#chartPreferences.ct-chart.ct-perfect-fourth", ""),
        h("div.footer", [
            legends(emailLegends),
            h("hr"),
            h("div.stats", [
                h("i.fa.fa-clock-o", "Campaign sent 2 days ago")
            ])
        ])
    ]);
};

const userBehavior = () => {
    return h("div.content", [
        h("div#chartHours.ct-chart"),
        h("div.footer", [
            legends(userBehaviorLegends),
            h("hr"),
            h("div.stats", [
                h("i.fa.fa-history", "Updated 3 minutes ago")
            ])
        ])
    ]);
};

const sales = () => {
    return h("div.content", [
        h("div#chartActivity.ct-chart"),
        h("div.footer", [
            legends(saleLegends),
            h("hr"),
            h("div.stats", [
                h("i.fa.fa-check", "Data information certified")
            ])
        ])
    ]);
};

const tasks = () => {
    return h("div.content", [
        h("div.table-full-width", [
        ])
    ])
};

const card = (title, category, content) => {
    return h("div.card", [
        h("div.header", [
            h("h4.title", String(title)),
            h("p.category" , String(category))
        ]),
        content
    ]);
};

const dashboard = () => {
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