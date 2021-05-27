import React, { useState } from 'react';
import './Graph.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];

          setInterval(function () {
            var x = (new Date).toLocaleTimeString("en-US"), // current time
              y = Math.round(Math.random() * 100);
            series.addPoint([x, y], true, true);
          }, 1000);
        }
      },
      backgroundColor: 'transparent'
    },

    time: {
      useUTC: false
    },
  
    title: {
      text: 'Live Random Data',
      style: {'color': 'white'},
      margin: 2
    },
  
    exporting: {
      enabled: false
    },

    colorAxis: {
      labels: {
        style: {
          color: 'white'
        }
      }
    },

    xAxis: {
      type: 'datetime',
      labels:{
        enabled: false,
        align: 'left',
      },
      gridLineColor: '#ababab',
      tickInterval: '15',
    },

    yAxis: {
      title: {
        text: 'y-axis',
        style: {
          color: 'white'
        },
        margin: 5,
        offset: 20,
        reserveSpace: false
      },
      labels: {
          align: 'right',
      }, 
      min: '0',
      max: '100',
      tickInterval: '25',
      gridLineColor: '#ababab',
      gridLineWidth: '0.5px',
    },

    legend: {
      enabled: false
    },
  
    series: [{
      name: 'Random data',
      marker: {
        enabled: false
      },
      data: (function () {
        // generate an array of random data
        var data = [],
          time = (new Date()).toLocaleTimeString('en-US'),
          i;
  
        for (i = -10; i <= 0; i += 1) {
          data.push([
            (new Date()).toLocaleTimeString('en-US'),
            Math.round(Math.random() * 100)
          ]);
        }
        return data;
      }())
    }]
  };


function Graph() {
    return (
        <div className="Graph">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{ style: { height: "105%" } }}
            />
        </div>
    );
}

export default Graph;