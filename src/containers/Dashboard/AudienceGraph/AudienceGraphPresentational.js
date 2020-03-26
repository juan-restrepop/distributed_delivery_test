import React from 'react';

import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
import { TimeSeries } from 'pondjs';


function AudienceGraphPresentational(props) {
    const {data} = props;

    const audienceTimeSeries = new TimeSeries({
        name: 'audience',
        columns: ['time', 'audience'],
        points: data
    });

    const avg_aud = audienceTimeSeries.avg('audience');
    const min_aud = audienceTimeSeries.min('audience');
    const max_aud = audienceTimeSeries.max('audience');

    return (
        <div className='audience-graph'>
            <p>Audience => min: {min_aud.toPrecision(4)}, avg: {avg_aud.toPrecision(4)}, max: {max_aud.toPrecision(4)}</p>
            <p>{audienceTimeSeries.min('audience')}</p>
            <ChartContainer timeRange={audienceTimeSeries.timerange()} width={800}>
                <ChartRow height="300">
                    <YAxis id="axis1" label="AUDIENCE" min={min_aud} max={max_aud} width="60" type="linear"/>
                    <Charts>
                        <LineChart axis="axis1" series={audienceTimeSeries} column={["audience"]}/>

                    </Charts>
                </ChartRow>
            </ChartContainer>
        </div>
    );
}

export default AudienceGraphPresentational;
