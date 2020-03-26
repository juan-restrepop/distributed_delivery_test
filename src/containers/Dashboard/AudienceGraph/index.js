import React from 'react';

import { requestAudienceData } from '../../../api'

import AudienceGraphPresentational from './AudienceGraphPresentational';

class AudienceGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoaded: false,
            error: false,
            data: [],
        }
    }

    componentDidMount() {
        const requestParams = {
            from: new Date(1969, 7, 20).getTime(),
            to: Date.now(),
        }
        return requestAudienceData(requestParams)
            .then(timeSeries => {
                return this.setState({
                    isLoading: false,
                    isLoaded: true,
                    data: timeSeries
                })
            })
            .catch(err => {
                return this.setState({
                    isLoading: false,
                    isLoaded: true,
                    error: true,
                })
            })

    }

    render() {
        const {
            isLoading, isLoaded,
            data, error,
        } = this.state;

        if (isLoading) {
            return <div>Loading</div>
        } else if (isLoaded && error) {
            return <div>There was an error please refresh</div>
        } else {
            return (
                <AudienceGraphPresentational data={data} />
            );
        }
    }
}

export default AudienceGraph;
