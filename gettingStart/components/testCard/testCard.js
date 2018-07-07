import * as echarts from '../ec-canvas/echarts';
const app = getApp();

Component({
    properties: {
        leftIcons: {
            type: Array,
            value: [
                {text: 'left1text', iconType: 'icon-picture'},
                {text: 'left2text', iconType: 'icon-picture'}
            ]
        },
        rightIcons: {
            type: Array,
            value: [
                {text: 'right1text', iconType: 'icon-picture'},
                {text: 'right2text', iconType: 'icon-picture'}
            ]
        },
        bgColor: {
            type: String,
            value: 'green'
        },
        chartObj: {
            type: Object,
            value: {
                onInit: function (canvas, width, height){
                    const chart = echarts.init(canvas, null, {
                      width: width,
                      height: height
                    });
                    canvas.setChart(chart);
                  
                    var option = {
                        tooltip : {
                            formatter: "{a} <br/>{b} : {c}%"
                        },
                        series: [
                            {
                                name: '业务指标',
                                type: 'gauge',
                                detail: {formatter:'{value}%'},
                                data: [{value: 50, name: '顺序练习',}],
                                textStyle: {
                                    fontSize: 2,
                                }
                            }
                        ]
                    };
                    chart.setOption(option, true);
                  
                    return chart;
                  }
            }
        }
    },
    methods: {

    },
})