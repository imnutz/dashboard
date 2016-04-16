"use strict";

var init = function init() {
    return [
        { active: true, route: "dashboard", iconClass: "pe-7s-graph", name: "Dashboard" },
        { active: false, route: "profile", iconClass: "pe-7s-user", name: "User Profile" },
        { active: false, route: "contacts", iconClass: "pe-7s-note2", name: "Contacts" },
        { active: false, route: "todo", iconClass: "pe-7s-news-paper", name: "To do" },
        { active: false, route: "icons", iconClass: "pe-7s-science", name: "Icons" },
        { active: false, route: "maps", iconClass: "pe-7s-map-marker", name: "Maps" },
        { active: false, route: "notifs", iconClass: "pe-7s-bell", name: "Notifications" },
        { active: false, route: "upgrade", iconClass: "pe-7s-rocket", name: "Upgrade to pro", activePro: true }
    ];
}

module.exports = { init };
