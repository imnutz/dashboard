"use strict";

var start = function start(state, actions, model, view, theme) {
    state.init(actions, view);

    actions.init(model.present);

    model.setRender(state.render);

    view.display(view.init(model.init(), actions));
};

module.exports = { start };
