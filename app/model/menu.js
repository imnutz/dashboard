"use strict";

let Type = require("union-type");

let menuItem = {
    active: false,
    route: "",
    iconClass: "",
    name: ""
};

const init = () => {
    return [
        { active: true, route: "dashboard", iconClass: "pe-7s-graph", name: "Dashboard" },
        { active: false, route: "profile", iconClass: "pe-7s-user", name: "User Profile" },
        { active: false, route: "table", iconClass: "pe-7s-note2", name: "Table list" },
        { active: false, route: "typography", iconClass: "pe-7s-news-paper", name: "Typography" },
        { active: false, route: "icons", iconClass: "pe-7s-science", name: "Icons" },
        { active: false, route: "maps", iconClass: "pe-7s-map-marker", name: "Maps" },
        { active: false, route: "notifs", iconClass: "pe-7s-bell", name: "Notifications" },
        { active: false, route: "upgrade", iconClass: "pe-7s-rocket", name: "Upgrade to pro", activePro: true }
    ];
}

module.exports = { init };