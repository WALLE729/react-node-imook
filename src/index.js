import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import Login from './container/login/login'
import Register from './container/register/register'
import Boss from './container/boss/boss'
import AuthRoute from './component/authroute/authroute'
import reducers from './reducers'
import './config'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f
const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools))

ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Route path = '/boss' component={Boss}></Route>
                    <Route path = '/login' component={Login}></Route>
                    <Route path = '/register' component={Register}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
)


