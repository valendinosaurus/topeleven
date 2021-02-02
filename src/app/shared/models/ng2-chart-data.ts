import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

export interface Ng2ChartData {
  chartData: ChartDataSets[];
  chartLabels: Label[];
  chartOptions: any;
  chartColors: Color[];
  chartLegend: boolean;
  chartPlugins: [];
  chartType: string;
}
