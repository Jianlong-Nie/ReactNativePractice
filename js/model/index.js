import React from 'react';
import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';
export { connect };

// 1. Initialize
const dva = (options) => {
    const app = create(options);
    // 2. Model
    options.models.forEach(model => app.model(model));

    app.start();
    const store = app._store;
    //eslint-disable-next-line
    app.start = container => () => (
        <Provider store={store}>
            {container}
        </Provider>
    );

    app.getStore = () => store;
    return app;
}; 

export default dva;
