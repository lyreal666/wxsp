Component({
    data: {
        leftIcons1: [
            {text: '章节练习', iconType: 'icon-document'},
            {text: '专项练习', iconType: 'icon-document_fill'}
        ],
        rightIcons1: [
            {text: '随机练习', iconType: 'icon-document_fill'},
            {text: '练习统计', iconType: 'icon-document_fill'},
        ],
        bgColor1: 'lightblue',
        chartObj1: {
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
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: 0, name: '顺序练习',}],
                            textStyle: {
                                fontSize: 2,
                            }
                        }
                    ]
                };
                chart.setOption(option, true);
              
                return chart;
              }
        },

        leftIcons2: [
            {text: '错题集', iconType: 'icon-like_fill'},
            {text: '每日一练', iconType: 'icon-like_fill'}
        ],
        rightIcons2: [
            {text: '考试记录', iconType: 'icon-like_fill'},
            {text: '考试技巧', iconType: 'icon-like_fill'},
        ],
        bgColor2: 'lightgreen',
        chartObj2: {
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
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: 30, name: '模拟考试',}],
                            textStyle: {
                                fontSize: 2,
                            }
                        }
                    ]
                };
                chart.setOption(option, true);
              
                return chart;
              }
        
        },

        iconsForMainFunc: [
            {text: 'VIP', iconType: 'icon-flag_fill'},
            {text: '学车流程', iconType: 'icon-flag_fill'},
            {text: '交通标志', iconType: 'icon-flag_fill'},
            {text: '南昌驾校', iconType: 'icon-flag_fill'}
        ],

        iconsForCars: [
            {text: '小车', iconType: 'icon-flashlight', underText: 'C1/C2/C3'},
            {text: '货车', iconType: 'icon-flashlight', underText: 'A2/B2'},
            {text: '客车', iconType: 'icon-flashlight', underText: 'A1/A3/B1'},
            {text: '摩托车', iconType: 'icon-flashlight', underText: 'D/E/F'},
        ]
    }
})