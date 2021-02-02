/* eslint-disable @typescript-eslint/prefer-for-of */
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Ng2ChartData } from '../shared/models/ng2-chart-data';
import { SnapshotElement } from '../shared/models/snapshot-element.interface';
import { Snapshot } from '../shared/models/snapshot.interface';

@Injectable({
  providedIn: 'root'
})
export class Ng2ChartsService {

  constructor(
    private datePipe: DatePipe
  ) {}

  private colors = [
    '#4A6670',
    '#668F80',
    '#4A6D7C',
    '#62929E',
    '#0B3142',
    '#0F5257',
    '#70ABAF',
  ];

  mapSnapshotDataForNg2Chart(
    snaphsots: Snapshot[],
    chartType: string
  ): Ng2ChartData {
    const data = this.mapSnapshotsToData(snaphsots);

    const colors = this.colors
      .sort(() => .5 - Math.random());

    const labels: Label[] = snaphsots.map(s => this.datePipe.transform(s.timestamp, 'dd.MM.yyyy'));

    return this.mapDataForNg2Charts(
      data, labels, colors, chartType
    );
  }

  mapSnapshotsToData(snapshots: Snapshot[]): ChartDataSets[] {
    const chartData: ChartDataSets[] = [];
    const names: string[] = [];

    snapshots.forEach(
      (snapshot: Snapshot) => {
        snapshot.values.forEach(
          (snapshotElement: SnapshotElement) => {
            if (!names.includes(snapshotElement.name)) {
              names.push(snapshotElement.name);
            }
          }
        );
      }
    );

    names.forEach((name: string) => {
      chartData.push({
        label: name,
        fill: false,
        data: []
      });
    });

    snapshots.forEach(
      (snapshot: Snapshot) => {
        const namesNotPresent: string[] = names.filter(n => !snapshot.values.map(s => s.name).includes(n));

        snapshot.values.forEach(
          (element: SnapshotElement) => chartData.find(d => d.label === element.name).data.push(element.whiteskill)
        );

        namesNotPresent.forEach(
          (name: string) => chartData.find(d => d.label === name).data.push(-1)
        );

      }
    );

    chartData.forEach(
      (cd: ChartDataSets) => {
        for (let i = 0; i < cd.data.length; i++) {
          if (i === 0 && cd.data[i] === -1) {
            cd.data[i] = 0;
          } else {
            if (cd.data[i] === -1) {
              cd.data[i] = cd.data[i - 1];
            }
          }
        }
      }
    );

    return chartData;
  }

  mapDataForNg2Charts(
    data: ChartDataSets[],
    labels: Label[],
    colors: string[],
    chartType: string
  ): Ng2ChartData {
    return {
      chartType,
      chartData: data,
      chartLabels: labels,
      chartColors: [
        {
          backgroundColor: colors
        }
      ],
      chartOptions: {
        responsive: true,
        aspectRatio: window.innerWidth > 800 ? 2.4 : 1,
        maintainAspectRatio: true,
        legend: {
          position: 'bottom'
        },
        tooltips: {
          callbacks: {
            label(tooltipItem, data): string {
              const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
              return `${datasetLabel} : ${tooltipItem.yLabel}`;
            }
          }
        },
        fill: false
      },
      chartLegend: true,
      chartPlugins: []
    };
  }
}
