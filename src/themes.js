import {colors, allCharts} from './Graph';

var doc = document.documentElement.style

function updateCharts() {
    for (var i in allCharts) {
        allCharts[i].data.datasets[0].backgroundColor = [colors.chartMain, colors.chartMain];
        allCharts[i].data.datasets[0].borderColor = [colors.chartBorder];
        allCharts[i].data.datasets[0].pointBackgroundColor = colors.chartPoint;

        allCharts[i].options.tooltips.backgroundColor = colors.chartTooltip;
        allCharts[i].options.tooltips.bodyFontColor = colors.chartTFont;
        allCharts[i].options.scales.yAxes[0].ticks.fontColor = colors.chartYFont;

        allCharts[i].update();
    }
}

var themes = {
    dark: function() {
        /*CHART DETAILS*/
        colors.chartMain = 'rgba(250, 180, 0, 0.3)';
        colors.chartBorder = 'rgba(250, 180, 0, 1)';
        colors.chartPoint = 'rgba(250, 180, 0, 0.5)';
        colors.chartTooltip = 'rgb(60, 60, 60)';
        colors.chartYFont = 'rgb(255, 255, 255)';
        colors.chartTFont = 'rgb(255, 255, 255)';

        /*GLOBAL*/
        doc.setProperty('--background', 'rgb(60, 60, 60)');
        doc.setProperty('--primary', 'white');
        doc.setProperty('--secondary', 'rgba(255, 157, 10, 1)');
        doc.setProperty('--textShadow', 'black');
        doc.setProperty('--shadow', 'black');

        /*HOME*/
        doc.setProperty('--titleCol', 'white');

        /*GRAPH*/
        doc.setProperty('--graphBackground', 'rgb(40, 40, 40)');
        doc.setProperty('--barBackground', 'rgb(30, 30, 30)');

        /*SIDEBAR*/
        doc.setProperty('--sidebarBack', 'rgb(30, 30, 30)');
        doc.setProperty('--buttonImg', 'invert()');
        doc.setProperty('--buttonImgHover', 'invert() invert()');
        doc.setProperty('--buttonTxt', 'black');
        doc.setProperty('--hoverCol1', '#ffc063');
        doc.setProperty('--hoverCol2', '#ff9d0a');

        doc.setProperty('--barImg', 'invert()');
        doc.setProperty('--barImgHover', 'invert() invert()');

        doc.setProperty('--saveCol', 'rgb(180, 180, 180)');

        updateCharts();
    },
    light: function() {
        colors.chartMain = 'rgba(200, 200, 200, 0.3)';
        colors.chartPoint = 'rgba(200, 200, 200, 0.5)';
        colors.chartBorder = 'rgba(200, 200, 200, 1)';
        colors.chartYFont = '#000000';
        colors.chartTooltip = 'rgb(120, 120, 120)';

        doc.setProperty('--background', '#ffffff');
        doc.setProperty('--textShadow', 'rgba(0, 0, 0, 0)');
        doc.setProperty('--primary', 'black');
        doc.setProperty('--secondary', 'rgb(200, 200, 200)');
        doc.setProperty('--sidebarBack', '#ffffff');
        doc.setProperty('--graphBackground', '#ffffff');
        doc.setProperty('--barBackground', '#ffffff');
        doc.setProperty('--buttonImg', 'invert() invert()');
        doc.setProperty('--hoverCol1', '#bcbcbc');
        doc.setProperty('--hoverCol2', '#848484');

        updateCharts();
    },
    silver: function() {
        colors.chartYFont = 'rgb(0, 0, 0)';
        colors.chartTooltip = '#B9B7BD';
        colors.chartTFont = 'rgb(30, 30, 30)';

        doc.setProperty('--background', '#EEEDE7');
        doc.setProperty('--textShadow', 'rgba(0, 0, 0, 0)');
        doc.setProperty('--primary', 'black');
        doc.setProperty('--sidebarBack', '#B9B7BD');
        doc.setProperty('--graphBackground', '#EEEDE7');
        doc.setProperty('--barBackground', '#B9B7BD');
        doc.setProperty('--buttonImg', 'invert() invert()');
        doc.setProperty('--barImg', 'invert() invert()');
        doc.setProperty('--saveCol', 'black');

        updateCharts();
    },
    cord: function() {
        colors.chartMain = 'rgba(50, 50, 50, 0.3)';
        colors.chartPoint = 'rgba(76, 82, 112, 0.5)';
        colors.chartBorder = 'rgba(119, 142, 255, 1)';

        doc.setProperty('--background', '#48525e');
        doc.setProperty('--primary', 'white');
        doc.setProperty('--secondary', '#778eff');
        doc.setProperty('--sidebarBack', '#313438');
        doc.setProperty('--graphBackground', '#4d5259');
        doc.setProperty('--barBackground', '#4d5259'); 
        doc.setProperty('--buttonImg', 'invert()');
        doc.setProperty('--hoverCol1', '#77d1ff');
        doc.setProperty('--hoverCol2', '#778eff');

        updateCharts();
    },
    solarized: function() {
        colors.chartMain = 'rgba(7, 54, 66, 0.3)';
        colors.chartPoint = 'rgba(7, 54, 66, 0.5)';
        colors.chartBorder = 'rgb(7, 54, 66)';
        colors.chartTooltip = 'rgb(7, 54, 66)';

        doc.setProperty('--background', '#073642');
        doc.setProperty('--primary', 'white');
        doc.setProperty('--secondary', '#586e75');
        doc.setProperty('--sidebarBack', '#002b36');
        doc.setProperty('--graphBackground', '#586e75');
        doc.setProperty('--barBackground', '#586e75');
        doc.setProperty('--buttonImg', 'invert()');
        doc.setProperty('--hoverCol1', '#93a1a1');
        doc.setProperty('--hoverCol2', '#586e75');

        updateCharts();
    },
    bny: function() {
        colors.chartMain = 'rgba(255, 255, 0, 0.3)';
        colors.chartPoint = 'rgba(255, 255, 0, 0.5)';
        colors.chartBorder = 'rgb(255, 255, 0)';
        colors.chartTooltip = 'black';

        doc.setProperty('--background', '#291211');
        doc.setProperty('--primary', 'white');
        doc.setProperty('--secondary', '#baba00')
        doc.setProperty('--sidebarBack', 'black');
        doc.setProperty('--graphBackground', 'black');
        doc.setProperty('--barBackground', '#baba00');
        doc.setProperty('--buttonImg', 'invert()');
        doc.setProperty('--hoverCol1', '#ffff68');
        doc.setProperty('--hoverCol2', '#d8d800');
        doc.setProperty('--barImg', 'invert() invert()');
        doc.setProperty('--saveCol', 'black');

        updateCharts();
    }
}

export default themes;