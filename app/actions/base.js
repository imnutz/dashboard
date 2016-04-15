"use strict";

var nop = function nop() {};

var base = {
    present: nop,
    init: function init(_present) {
        this.present = _present
    }
};

module.exports = base;