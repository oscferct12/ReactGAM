import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Dashboard from './components/dashboard';
import Details from './components/details';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Servers from './components/server';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <TransitionGroup>
                <CSSTransition
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                >
                    <Switch>
                        <Route path="/results" component={Dashboard} />
                        <Route path="/details/:itemId" component={Details} />
                        <Route path="/server" component={Servers} />
                        <Redirect from="/" to="/results" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
