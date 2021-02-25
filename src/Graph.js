import React from 'react';
import './Graph.css';
import Chart from 'chart.js';
import {getCoinData, getPriceChange} from './GetData';

var colors = {
    chartMain: 'rgba(250, 180, 0, 0.3)',
    chartBorder: 'rgba(250, 180, 0, 1)',
    chartPoint: 'rgba(250, 180, 0, 0.5)',
    chartTooltip: 'rgb(60, 60, 60)',
    chartYFont: 'rgb(255, 255, 255)',
    chartTFont: 'rgb(255, 255, 255)'
}

var allCharts = [];



class Graph extends React.Component {
    changeDays(days) {
        if (days > 0 && days < 600)
            getCoinData(this.props.coin, days).then((value) => {
                this.value = value

                var newData = {
                    labels: this.value,
                    datasets: [{
                        label: 'Value (USD)',
                        data: this.value,
                        backgroundColor: [
                            colors.chartMain,
                            colors.chartMain
                        ],
                        borderColor: [colors.chartBorder],
                        borderWidth: 1,
                        pointBackgroundColor: colors.chartPoint,
                        pointRadius: 0,
                        lineTension: 0
                    }]
                };

                this.chart.data = newData;
                this.chart.update();
            });
    }

    alignCharts() {
        document.getElementById(this.props.parent + this.props.coin).style.marginLeft = `${this.props.x}vw`;
        document.getElementById(this.props.parent + this.props.coin).style.marginTop = `${this.props.y}vw`;
    }

    createChart() {
        var ctx = document.getElementById(this.props.parent + this.props.coin).getElementsByClassName('chart-cv');
        var chart;

        getCoinData(this.props.coin, this.props.days).then((value) => {
            this.value = value

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.value,
                    datasets: [{
                        label: 'Value (USD)',
                        data: this.value,
                        backgroundColor: [
                            colors.chartMain,
                            colors.chartMain
                        ],
                        borderColor: [colors.chartBorder],
                        borderWidth: 1,
                        pointBackgroundColor: colors.chartPoint,
                        pointRadius: 0,
                        lineTension: 0
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                callback: function(value, index, values) {
                                    var real = index/5;
                                    
                                    return real;
                                },
                                fontColor: 'rgba(0, 0, 0, 0)'
                            },
                            gridLines: {
                                tickMarkLength: 0
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                padding: window.innerWidth / 150,
                                fontSize: window.innerWidth / 150,
                                fontColor: colors.chartYFont
                            },
                            gridLines: {
                                tickMarkLength: 0
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false,
                        titleFontSize: 0,
                        titleMarginBottom: 0,
                        bodyFontSize: window.innerWidth / 100,
                        bodyFontFamily: "'sans-serif'",
                        yPadding: window.innerWidth / 500,
                        cornerRadius: window.innerWidth / 300,
                        backgroundColor: colors.chartTooltip,
                        bodyFontColor: colors.chartTFont,

                        callbacks: {
                            label: function (tooltipItem, data) {
                                var label = "Value: "
                                label += Math.round(tooltipItem.xLabel * 100) / 100;
                                label += "$";

                                return label;
                            }
                        }
                    },
                    hover: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false,
                        animationDuration: 0                      
                    },
                    onResize: function(chart, size) {
                        chart.options.tooltips.bodyFontSize = window.innerWidth / 100;
                        chart.options.tooltips.yPadding = window.innerWidth / 500;
                        chart.options.tooltips.cornerRadius = window.innerWidth / 300;
                        chart.options.scales.yAxes[0].ticks.fontSize = window.innerWidth / 150;
                        chart.options.scales.yAxes[0].ticks.padding = window.innerWidth / 150;

                        chart.update();
                    }
                }
            });

            //Remove fetching text
            var div = document.getElementById(this.props.parent + this.props.coin);
            var fetching = div.getElementsByClassName('fetching')[0];
            fetching.style.display = 'none';

            document.getElementById(this.props.parent + this.props.coin).parentNode.style.display = 'solid';

            allCharts.push(chart);

            this.chart = chart;
        });
    }

    getValue() {
        getPriceChange(this.props.coin).then((value) => {
            var price = document.getElementById(this.props.parent + this.props.coin).getElementsByClassName('price')[0];
            var change = document.getElementById(this.props.parent + this.props.coin).getElementsByClassName('24change')[0];

            var final = (Math.round(value[1] * 100)/100);
            final = (final > 0 ? '+'+final.toString() : final.toString());

            price.textContent = `Current price: ${value[0].toLocaleString()}$`;
            change.textContent = `24hr change: ${final}`
        });
    }

    constructor(props) {
        super(props);

        this.createChart = this.createChart.bind(this);
        this.getValue = this.getValue.bind(this);
        this.alignCharts = this.alignCharts.bind(this);

        window.addEventListener('load', this.createChart);
        window.addEventListener('load', this.getValue);
        window.addEventListener('load', this.alignCharts);
    }

    render() {
        return(
            <div id={this.props.parent + this.props.coin} class="graph">
                <div class="chart">
                    <canvas class="chart-cv">
                    </canvas>

                    <h2 class="fetching">Fetching data</h2>
                </div>

                <div class="chart-bar">
                    <h2>{this.props.coin}</h2>

                    <div class="data-div">
                        <h3 class='price'>Current price: </h3>
                        <h3 class='24change'>24hr change: </h3>
                    </div>

                    <div class="days">
                        <h4>Last</h4>

                        <input type="number" class="day-selector" placeholder='1' onBlur={(inp) => {
                            this.changeDays(inp.target.value);

                            if(inp.target.value > 1)
                                inp.target.placeholder = inp.target.value.toString()
                            }} />

                        <h4>days</h4>
                    </div>
                </div>
            </div>
        );
    }
};

export {colors, allCharts};

export default Graph;