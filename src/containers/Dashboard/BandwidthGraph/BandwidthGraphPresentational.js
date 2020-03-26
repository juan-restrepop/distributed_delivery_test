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

    const style = {
        cdn: {
            normal: {stroke: "var(--atomic-color-hot-pink)", fill: "none", strokeWidth: 2},
        },
        p2p: {
          normal: {stroke: "var(--atomic-color-azure)", fill: "none", strokeWidth: 2},
        }
    };

    return (
        <div className='audience-graph'>
            <ChartContainer timeRange={cdnTimeSeries.timerange()} width={1200}>
                <ChartRow height="300">
                    <YAxis id="axis1" label="CDN - P2P" min={Math.min(min_cdn, min_p2p)} max={Math.max(max_cdn, max_p2p)} width="60" type="linear"/>
                    <Charts>
                        <LineChart axis="axis1" series={cdnTimeSeries} columns={["cdn"]} style={style}/>
                        <LineChart axis="axis1" series={p2pTimeSeries} columns={["p2p"]} style={style}/>
                    </Charts>
                </ChartRow>
            </ChartContainer>
        </div>
    );
}

export default BandwidthGraphPresentational;
