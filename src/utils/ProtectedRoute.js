import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';

import { isAuthenticated } from '../api/'

/* Router protected routes*/
class ProtectedRouteWithoutRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoaded: false,
            isAuthenticated: false,
        }
    }

    componentDidMount() {
        isAuthenticated()
            .then(data => {
                debugger
                return this.setState({
                    isLoading: false,
                    isLoaded: true,
                    isAuthenticated: true,
                })
            })
            .catch(err => {
                debugger
                return this.setState({
                    isLoading: false,
                    isLoaded: true,
                    isAuthenticated: false,
                })
            })
    }

    render() {
        const {component: Component, ...rest} = this.props;
        debugger

        if (this.state.isLoading) {
            return <div className='loader'>Loading</div>;
        } else if (this.state.isLoaded) {
            return (
                this.state.isAuthenticated ?
                <Route
                    {...rest}
                    render={ (props) => <Component {...props} /> }
                />
                :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { referrer: true, fromLocation: this.props.location.pathname }
                    }}
                />
            );
        }
    }
}

export default withRouter(ProtectedRouteWithoutRouter);
