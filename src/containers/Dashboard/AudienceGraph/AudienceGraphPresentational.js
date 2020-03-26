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

    const avg_aud = audienceTimeSeries.avg('audience');
    const min_aud = audienceTimeSeries.min('audience');
    const max_aud = audienceTimeSeries.max('audience');

    const style = {
      value: {
        stroke: "#a02c2c",
        opacity: 0.2
      }
    };

    const axisStyle = {
      labels: { labelColor: "Red", labelWeight: 100, labelSize: 11 },
      axis: { axisColor: "Orange" }
    };

    return (
        <div className='audience-graph'>
            <p>Audience => min: {min_aud.toPrecision(4)}, avg: {avg_aud.toPrecision(4)}, max: {max_aud.toPrecision(4)}</p>
            <Resizable>
                <ChartContainer timeRange={audienceTimeSeries.timerange()} timeAxisStyle={axisStyle}>
                    <ChartRow height="300">
                        <YAxis
                            style={axisStyle}
                            id="audience"
                            label="AUDIENCE"
                            min={min_aud}
                            max={max_aud}
                            width="60"
                        />
                        <Charts>
                            <LineChart axis="audience" series={audienceTimeSeries} style={style}/>
                        </Charts>
                    </ChartRow>
                </ChartContainer>
            </Resizable>
        </div>
    );
}

export default AudienceGraphPresentational;
