import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProtectedRoute } from './utils';
// Import components
import LogIn from './containers/LogIn';
import Dashboard from './containers/Dashboard';

const routes = [
    {
        path: '/login',
        component: LogIn,
        id:'login-route',
        protected: false,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        id:'dashboard-route',
        protected: true,
    },
]

// Main container
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {routes.map(
                        route => route.protected ?
                            <ProtectedRoute path={route.path} component={route.component} key={route.id}/>
                            :
                            <Route path={route.path} component={route.component} key={route.id}/>
                    )}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
