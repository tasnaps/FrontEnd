import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface ChartData {
  date: string;
  value: number;
}
interface ChartProps {
  settings: {
    chartName: string;
    chartType: string;
    chartColor: string;
  };
  data: ChartData[];
}

function Chart({settings, data = []}: ChartProps):void {
  const options = {
    chart: {
      type: settings.chartType
    },
    title: {
      text: settings.chartName,
      style: {
        color: settings.chartColor
      }
    },
     series: [{
            data: data.map(item => item.value),
            color: settings.chartColor
        }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Chart;