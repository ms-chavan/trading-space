import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { IChartProps } from './models';

//console.log(dataArr);



const getOptions = (chartData: any) => {
    let dataArr: any = [];
    const dailyData = chartData['Time Series (Daily)'];
    for(let date in dailyData) {
        dataArr.push([new Date(date).getTime(), parseFloat(dailyData[date]['4. close'])]);
    }
    const options: any = {
        title: {
          text: chartData['Meta Data'] ? chartData['Meta Data']['2. Symbol'] : ''
        },
        series: [{
          data: dataArr.reverse()
        }],
        credits: {
            enabled: false
        }
      }
    return options;
}

export const Chart = (props: IChartProps) => {
  if(props.chartData
    && Object.keys(props.chartData).length === 0
    && Object.getPrototypeOf(props.chartData) === Object.prototype) {
      Highcharts.charts[0]?.showLoading();
    }

  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(getOptions(props.chartData));
    for(const chart of Highcharts.charts) {
      if(chart) {
        chart.hideLoading();
      } 
    }
}, [props.chartData]);

return(
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  </div>
)
}