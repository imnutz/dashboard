"use strict";

let Type = require("union-type");

let menuItem = {
    active: false,
    href: "",
    iconClass: "",
    name: ""
};

const init = () => {
    return [
        { active: true, href: "#", iconClass: "pe-7s-graph", name: "Dashboard" },
        { active: false, href: "#", iconClass: "pe-7s-user", name: "User Profile" },
        { active: false, href: "#", iconClass: "pe-7s-note2", name: "Table list" },
        { active: false, href: "#", iconClass: "pe-7s-news-paper", name: "Typography" },
        { active: false, href: "#", iconClass: "pe-7s-science", name: "Icons" },
        { active: false, href: "#", iconClass: "pe-7s-map-marker", name: "Maps" },
        { active: false, href: "#", iconClass: "pe-7s-bell", name: "Notifications" },
        { active: false, href: "#", iconClass: "pe-7s-rocket", name: "Upgrade to pro", activePro: true }
    ];
}

module.exports = { init };