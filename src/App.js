import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import components
import Home from './containers/Home';
import LogIn from './containers/LogIn';
import Dashboard from './containers/Dashboard';

const routes = [
    {
        path: '/login',
        component: LogIn,
        id:'login-route',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        id:'dashboard-route',
    },
    {
        path: '/',
        component: Home,
        id:'home-route',
    },
]

// Main container
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {routes.map(
                        route => <Route path={route.path} component={route.component} id/>
                    )}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
