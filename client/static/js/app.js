import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import Router from 'react-router/lib/Router'
import hashHistory from 'react-router/lib/hashHistory'
import { Provider } from 'react-redux'
import createStore from './redux/create'
import { syncHistoryWithStore } from 'react-router-redux'



const store = createStore(hashHistory)

let root = document.getElementById('app');

function init() {
    const Provider = require('react-redux').Provider;
    const Router = require('react-router/lib/Router');
    const getRoutes = require('./routes').default;
    render(
        <Provider store={store} key="provider">
            <Router
                history={syncHistoryWithStore(hashHistory, store)}
                routes={getRoutes(store)}
            />
        </Provider>,
        root
    )
}

init();

if (module.hot) {
    module.hot.accept([
        'react-router/lib/Router',
        'react-redux',
        './routes',
    ], () => {
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(root);
            init();
        });
    });
}