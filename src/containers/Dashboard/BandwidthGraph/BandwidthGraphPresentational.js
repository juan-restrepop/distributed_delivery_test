import React from 'react';

import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
import { TimeSeries } from 'pondjs';


function BandwidthGraphPresentational(props) {
    const {cdn, p2p} = props.data;

    const cdnTimeSeries = new TimeSeries({
        name: 'cdn',
        columns: ['time', 'cdn'],
        points: cdn
    });
    const p2pTimeSeries = new TimeSeries({
        name: 'p2p',
        columns: ['time', 'p2p'],
        points: p2p
    });


    const avg_cdn = cdnTimeSeries.avg('cdn');
    const min_cdn = cdnTimeSeries.min('cdn');
    const max_cdn = cdnTimeSeries.max('cdn');

    const avg_p2p = p2pTimeSeries.avg('p2p');
    const min_p2p = p2pTimeSeries.min('p2p');
    const max_p2p = p2pTimeSeries.max('p2p');

    return (
        <div className='audience-graph'>
            <p>CDN => min: {min_cdn.toPrecision(4)}, avg: {avg_cdn.toPrecision(4)}, max: {max_cdn.toPrecision(4)}</p>
            <p>P2P => min: {min_p2p.toPrecision(4)}, avg: {avg_p2p.toPrecision(4)}, max: {max_p2p.toPrecision(4)}</p>
            <ChartContainer timeRange={cdnTimeSeries.timerange()} width={800}>
                <ChartRow height="300">
                    <YAxis id="axis1" label="CDN" min={min_cdn} max={max_cdn} width="60" type="linear"/>
                    <Charts>
                        <LineChart axis="axis1" series={cdnTimeSeries} column={["audience"]}/>
                        <LineChart axis="axis2" series={p2pTimeSeries} column={["audience"]}/>
                    </Charts>
                    <YAxis id="axis2" label="P2P" min={min_p2p} max={max_p2p} width="60" type="linear"/>
                </ChartRow>
            </ChartContainer>
        </div>
    );
}

export default BandwidthGraphPresentational;
