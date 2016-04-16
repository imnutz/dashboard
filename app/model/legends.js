"use strict";

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

module.exports = { emailLegends, userBehaviorLegends, saleLegends };
