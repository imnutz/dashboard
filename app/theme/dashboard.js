"use strict";

const h = require("snabbdom/h");

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

const legend = (legend) => {
    return h("i.fa.fa-circle.text-info", String(legend));
};

const legends = (legends) => {
    return h("div.legend", legends.map(legend));
};

const emailStatistics = () => {
    return h("div.content", [
        h("div#chartPreferences.ct-chart.ct-perfect-fourth", ""),
        h("div.footer", legends(["Open", "Bounce", "Unsubscribe"])),
        h("hr"),
        h("div.stats", [
            h("i.fa.fa-clock-o", "Campaign sent 2 days ago")
        ])
    ]);
};

const userBehavior = () => {
    return h("div.content", [
        h("div#chartHours.ct-chart"),
        h("div.footer", legends(["Open", "Click", "Click second time"]))
    ]);
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

                ])
            ])
        ])
    ]);
};

module.exports = { dashboard };