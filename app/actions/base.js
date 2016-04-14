"use strict";

const nop = () => undefined;

let base = {
    present: nop,
    init: function init(_present) {
        base.present = _present
    }
};

module.exports = base;