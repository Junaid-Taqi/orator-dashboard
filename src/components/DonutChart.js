import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function DonutChart({ title, data, colors = ['#9463F7', '#48C2C3'] }) {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent'
    },
    title: {
      text: title,
      style: { color: '#fff' }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        size: '80%',        // ✅ Overall size kam
        innerSize: '60%',   // ✅ Donut hole size
        borderWidth: 0,
        borderColor: 'transparent',
        dataLabels: {
          enabled: false
        },
        showInLegend: true,
        colors: colors,
        states: {
          hover: {
            halo: null
          }
        }
      }
    },
    legend: {
      itemStyle: { color: '#fff' }
    },
    series: [
      {
        name: 'Share',
        data,
        borderWidth: 0
      }
    ],
    credits: { enabled: false }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default DonutChart;