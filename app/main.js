"use strict";

var start = function start(state, actions, model, view, services) {
    state.init(actions, view);

    actions.init(model.present, services);

    model.setRender(state.render);

    view.display(view.init(model.init(), actions));
};

module.exports = { start };
