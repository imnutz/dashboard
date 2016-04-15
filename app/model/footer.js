"use strict";

var init = function init() {
    return [
        { active: false, route: "home", iconClass: "pe-7s-graph", name: "Home" },
        { active: false, route: "company", iconClass: "pe-7s-user", name: "Company" },
        { active: false, route: "portfolio", iconClass: "pe-7s-note2", name: "Portfolio" },
        { active: false, route: "blog", iconClass: "pe-7s-news-paper", name: "Blog" }
    ];
};

module.exports = { init };