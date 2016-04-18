"use strict";

var nop = function nop() {};

var base = {
    present: nop,
    services: null,
    init: function init(_present, _services) {
        this.present = _present;
        this.services = _services;
    }
};

module.exports = base;