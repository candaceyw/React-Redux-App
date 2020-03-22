import React from 'react';
import * as VictoryChart from 'victory';

const MissionData = () => {
  return (
    <div>
      <h1>Data Coming soon</h1>
      {/* show bar chart for fails and successful launches
      https://www.skrdev.com/spacex */}

      {/* <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: 'time' }}
      >
        <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: '#5f5c5b', negative: '#c43a31' }}
          data={sampleDataDates}
        />
      </VictoryChart> */}
    </div>
  );
};

export default MissionData;
