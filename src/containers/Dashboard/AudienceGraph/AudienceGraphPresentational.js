import React from 'react';

import { Charts, ChartContainer, ChartRow, YAxis, LineChart, Resizable } from "react-timeseries-charts";
import { TimeSeries } from 'pondjs';


function AudienceGraphPresentational(props) {
    const {data} = props;

    const audienceTimeSeries = new TimeSeries({
        name: 'audience',
        columns: ['time', 'audience'],
        points: data
    });

    const min_aud = audienceTimeSeries.min('audience');
    const max_aud = audienceTimeSeries.max('audience');

    const style = {
      audience: {
        normal: {stroke: "var(--atomic-color-yellow-burnt)", fill: "none", strokeWidth: 2},
      }
    };

    return (
        <div className='audience-graph'>
            <ChartContainer timeRange={audienceTimeSeries.timerange()} width={1200}>
                <ChartRow height="300">
                    <YAxis
                        id="audience"
                        label="AUDIENCE"
                        min={min_aud}
                        max={max_aud}
                        width="60"
                    />
                    <Charts>
                        <LineChart axis="audience" series={audienceTimeSeries} columns={["audience"]} style={style}/>
                    </Charts>
                </ChartRow>
            </ChartContainer>
        </div>
    );
}

export default AudienceGraphPresentational;
