"use strict";

let Type = require("union-type");

let Anchor = Type({
    Anchor:{title: String, iconClass: String, href: String}
});

module.exports = Anchor;