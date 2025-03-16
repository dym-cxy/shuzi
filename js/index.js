//柱状图模块1
(function(){
    //1实例化对象
 var myChart = echarts.init(document.querySelector
    ('.bar .chart'));
    //2.指定配置项和数据
 var  option = {
      color:['#2f89cf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'
          }
        },
        //修饰图表的大小
        grid: {
          left: '0%',
          top:  '10px',
          right: '0%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            },
            //修改刻度标签 相关样式
            axislabel:{
                color: "rgba(255, 255, 255, .6)",
                fontsize: "12"
            },
           //不显示x坐标轴的样式
           axisline:{
             show: false
           }
          }
        ],
        yAxis: [
          {
            type: 'value',
            //修改刻度标签 相关样式
            axisLabel:{
                color: "rgba(255, 255, 255, .6)",
                fontsize: "12"
            },
            axisLine:{
             lineStyle:{
               color:"rgba(255,255,255,.1)",
               Width:2
             }   
            },
        //   y轴分割线的颜色
             splitLine:{
                lineStyle:{
                  color:"rgba(255,255,255,.1)"  
                }
             }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle:{
             //修改柱子圆角
             barBorderRadius:5
            }
          }
        ]
        };
        //3.把配置项给实例对象
        myChart.setOption(option);
        //4.让图表跟随屏幕自动的去适应
        window.addEventListener("resize",function(){
         myChart.resize();
        });
    })();
  //柱状图2
  (function(){
    var myColor =["#1089E7", "#F57474","#56D0E3","#F8B448","#8B78F6"];
    var myChart = echarts.init(document.querySelector
        (".bar2 .chart"));
     option = {
        grid: {
          top: '10%',
          left: '22%',
          bottom: '10%',
        //   containLabel: true
        },
        xAxis: {
         show: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            data: ["HTML5","CSS3","javascript","VUE","NODE"],
           //不显示y轴的线
          axlisLine:{
             show: false
          },
          //不显示刻度
          axisTick:{
              show: false
          },
          //把刻度标签里面的文字颜色设置为白色
          axisLablel:{
              color:"#fff"
          }
         },
         {
            data: [ 702, 350, 610, 793, 664],
            inverse: true,
           //不显示y轴的线
          axlisline:{
             show: false
          },
          //不显示刻度
          axisTick:{
              show: false
          },
          //把刻度标签里面的文字颜色设置为白色
          axisLablel:{
              color:"#fff"
          }
         }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [70,34,60,78,69],
            yAxisIndex:0,
            //修改第一组柱子的圆角
            itemStyle:{
                barBorderRadius:20,
                //此时的color可以修改柱子的颜色
                color: function(params){
                  // params 传进来的是柱子对象
                  // dataIndex 是当前柱子的索引号
                  return myColor[params.dataIndex];  
                }
            },
            //柱子之间的距离
            barCategoryGap:50,
            //柱子的宽度
            barWidth:10,
            //显示柱子里的文字
            label:{
             show:true,
             Position:"inside",
             //{c}会自动的解析为数据  data里面的数据
             formatter:"{c}%"    
            }
           },
          {
            name: "框",
            type: 'bar',
            barCategoryGap:50,
            barWidth:15,
            data: [100,100,100,100,100],
            yAxisIndex:1,
            itemStyle:{
               color:"none",
               borderColor:"#00c1de",
               borderWidth:3,
               barBorderRadius: 15
            }
          }
        ]
      }; 
     // 3.把配置给实例对象
     myChart.setOption(option);
     window.addEventListener('resize',function(){
        myChart.resize();
  });
})();
//折线图模块1模块制作
(function (){ 
  var yearData = [
  {
    year:'2024',//年份
    data:[  //两个数组是因为有两条线
      [24,40,101,134,90,230,210,230,120,230,210,120],
      [40,64,191,324,290,330,310,213,180,200,180,79]
    ]
  },
  {
    year:'2025',//年份
    data:[
      [123,175,112,197,121,67,98,21,43,64,76,38],
      [143,131,165,123,178,21,82,64,43,60,19,34]
    ]
  }
   ];

  //1.实例化对象
  var myChart = echarts.init(document.querySelector
    (".line .chart"));
  //2.指定配置
    var   option = {
    color:['#00f2f1','#007bff'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
       //修改图例组件 文字颜色
      testStyle:{
        color:"skyblue"
      },
      //这个10%必须加引号
      right:"10%"
    },
    grid: {
      top:"20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      show : true,//显示边框
      borderColor:"#012f4a",//边框颜色
      containLabel: true //包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
    },
    axisTick:{
      show:false//去除刻度线
    },
    axisLablel:{
      color:"#4c9bfd"
    },
    axisLine:{
      show: false //去除轴线
    },
    yAxis: {
      type: 'value',
      axisTick:{
        show: false//去除刻度线
      },
      axisLablel:{
        color:"#4c9bfd"//文本颜色
      },
      axisLine:{
        show:false //去除轴线
      },
      splitline:{
        lineStyle:{
          color:"#012f4a"//分割线颜色
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        smooth: true,
        data: [24,40,101,134,90,230,210,230,120,230,210,120]
      },
      {
        name: '新增游客',
        type: 'line',
        smooth:  true,
        data: [40,64,191,324,209,330,310,213,180,200,180,79]
      },
    ]
  };
  //3.把配置给实例对象
  myChart.setOption(option);
  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize",function(){
    myChart.resize();
  });
  //5.点击切换效果
  $('.line h2').on('click','a',function(){
    // alert(1);
    // console.log($(this).index());
    // 点击a 之后 根据当前的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);  
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //需要重新渲染
    myChart.setOption(option);
  });
})();
//折线图2
(function(){
  var myChart = echarts.init(document.querySelector
    ('.line2  .chart'));
    var option = {

      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top:"0%",
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        textStyle:{
          color:"rgba(255,255,255,.5)",
          fontsize:"12"
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '10',
        top: '30',
        right:'10',
        bottom: '10',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
          axisLabel:{
            testStyle:{
              color:"rgba(255,255,255,.6)",
              fontsize: 12
            }
          },
          axisLine:{
           lineStyle:{
             color:"rgba(255,255,255,.2)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick:{ show: false},
          axisLine:{
            lineStyle:{
              color:"rgba(255,255,255,.1)"
            }
          },
         axisLabel:{
          testStyle: {
            color:"rgba(255,255,255,.6)",
          fontsize: 12
          }
         },
      //修改分割线的颜色
      splitLine:{
        lineStyle:{
          color:"rgba(255,255,255,.1)"
        }
      }
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'line',
          smooth:true,
          //单独修改当前线条的样式
          lineStyle:{
             color:"#0184d5",
             Width:"2"
         },
         //填充区域
          areaStyle: {
            color:"pink"
          },
          emphasis: {
            focus: 'series'
          },
          //设置拐点
          Symbol:"circle",
          //拐点大小
          symbolSize: 8,
          //开始不显示拐点，鼠标经过显示
          showSymbol: false,
          //设置拐点颜色以及边框
          itemStyle:{
             color:"#0184d5",
             borderColor:"rgba(221,220,107,.1)",
             borderWidth:12
          },
          data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
        },
        {
          name: 'Union Ads',
          type: 'line',
          smooth:true,
          stack: 'Total',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          itemStyle: {
            normal: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
      myChart.resize();
     });
})();
//饼形图
(function(){
  var myChart = echarts.init(document.querySelector
    (".pie .chart"));
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom:"5%",
        //修改小图标的大小
        itemWidth:10,
        itemHeight:10,
        textStyle:{
          color:"rgba(255,255,255,.5)",
          fontsize:"12"
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ["40%", "60%"],
          center: ["50%",  "45%"],
          avoidLabelOverlap: false,
          //图形上的文字
          label: {
            show: false,
            position: 'center'
          },
          //链接文字和图形的线是否显示
          labelLine: {
            show: true
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
      myChart.resize();
     });
})();
//饼形图2 地区分布图
(function(){
  var myChart = echarts.init(document.querySelector
(".pie2 .chart"));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend:{
      top:"0%",
      textStyle:{
        color:"rgba(255,255,255,.5)",
        fontsize:"12"
      }
    },
    series: [
     
      {
        name: "地区分布",
        type: 'pie',
        radius: ["10%", "60%"],
        center: ["50%", "50%"],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        //图形的文字标签
        label:{
          fontSize:10
        },
        labelLine:{
          //length 链接图形的线条
          length:6,
          //length2链接文字的线条
          length2:5
        },
        data: [
          { value: 20, name: 'rose 1' },
          { value: 26, name: 'rose 2' },
          { value: 24, name: 'rose 3' },
          { value: 25, name: 'rose 4' },
          { value: 20, name: 'rose 5' },
          { value: 25, name: 'rose 6' },
          { value: 30, name: 'rose 7' },
          { value: 42, name: 'rose 8' }
        ]
      }
    ]
  };
  myChart.setOption(option);
})();
(function(){
  var myChart = echarts.init(document.querySelector
(".map .chart"));
var chinaGeoCoordMap = {
  '黑龙江': [127.9688, 45.368],
  '内蒙古': [110.3467, 41.4899],
  "吉林": [125.8154, 44.2584],
  '北京市': [116.4551, 40.2539],
  "辽宁": [123.1238, 42.1216],
  "河北": [114.4995, 38.1006],
  "天津": [117.4219, 39.4189],
  "山西": [112.3352, 37.9413],
  "陕西": [109.1162, 34.2004],
  "甘肃": [103.5901, 36.3043],
  "宁夏": [106.3586, 38.1775],
  "青海": [101.4038, 36.8207],
  "新疆": [87.611053,43.828171],
  "西藏": [91.117212,29.646922],
  "四川": [103.9526, 30.7617],
  "重庆": [108.384366, 30.439702],
  "山东": [117.1582, 36.8701],
  "河南": [113.4668, 34.6234],
  "江苏": [118.8062, 31.9208],
  "安徽": [117.29, 32.0581],
  "湖北": [114.3896, 30.6628],
  "浙江": [119.5313, 29.8773],
  "福建": [119.4543, 25.9222],
  "江西": [116.0046, 28.6633],
  "湖南": [113.0823, 28.2568],
  "贵州": [106.6992, 26.7682],
  "云南": [102.9199, 25.4663],
  "广东": [113.12244, 23.009505],
  "广西": [108.479, 23.1152],
  "海南": [110.3893, 19.8516],
   "台湾": [120.702967,24.123621],
  '上海': [121.4648, 31.2891]
};
var chinaDatas = [
  [{
      name:"北京市",
      value:0
  },{
      name: '黑龙江',
      value:0
  },{name:'上海市'}],
    [{
      name: '内蒙古',
      value: 0
  }],	[{
      name: '吉林',
      value: 0
  }],	[{
      name: '辽宁',
      value: 0
  }],	[{
      name: '河北',
      value: 0
  }],	[{
      name: '天津',
      value: 0
  }],	[{
      name: '山西',
      value: 0
  }],	[{
      name: '陕西',
      value: 0
  }],	[{
      name: '甘肃',
      value: 0
  }],	[{
      name: '新疆',
      value: 0
  }],	[{
      name: '西藏',
      value: 0
  }],	[{
      name: '台湾',
      value: 0
  }],	[{
      name: '黑龙江',
      value: 0
  }],	[{
      name: '云南',
      value: 0
  }],	[{
      name: '宁夏',
      value: 0
  }],	[{
      name: '青海',
      value: 0
  }],	[{
      name: '四川',
      value: 0
  }],	[{
      name: '重庆',
      value: 0
  }],	[{
      name: '山东',
      value: 0
  }],	[{
      name: '河南',
      value: 0
  }],	[{
      name: '江苏',
      value: 0
  }],	[{
      name: '安徽',
      value: 0
  }],	[{	
      name: '湖北',
      value: 0
  }],	[{
      name: '浙江',
      value: 0
  }],	[{
      name: '福建',
      value: 0
  }],	[{
      name: '江西',
      value: 0
  }],	[{
      name: '湖南',
      value: 0
  }],	[{
      name: '贵州',
      value: 0
  }],[{
      name: '广西',
      value: 0
  }],	[{
      name: '海南',
      value: 0
  }],	[{
      name: '上海',
      value: 0
  }]
];

var convertData = function(data) {
  var res = [];
  for(var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [[121.4648, 31.2891],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701],[117.1582, 36.8701]];//被攻击点
      if(fromCoord && toCoord[i]) {
          res.push([{
              coord: toCoord[i],
          },{
              coord: fromCoord,
              value: dataItem[0].value,
              // visualMap: false
          }]);
      }
  }
  return res;
};

var series = [];
[['山东', chinaDatas]].forEach(function(item, i) {
  console.log(item)
  series.push( {
          type: 'map',
          mapType: 'china',
          aspectScale: 0.85,
          layoutCenter: ["50%", "50%"], //地图位置
          layoutSize: '100%',
          zoom: 1, //当前视角的缩放比例
          // roam: true, //是否开启平游或缩放
          scaleLimit: { //滚轮缩放的极限控制
              min: 1,
              max: 2
          },
          itemStyle: {
              normal: {
                  areaColor: '#12235c',
                  borderColor: '#2ab8ff',
                  borderWidth: .5,
                  shadowColor: 'rgba(0,54,255, 0.4)',
                  shadowBlur: 100

              },
              emphasis: {
                  areaColor: '#02102b',
                  label: {
                      color: "#fff"
                  }

              }
          }
      },{
          type: 'lines',
          zlevel: 2,
          effect: {
              show: true,
              period: 3, //箭头指向速度，值越小速度越快
              trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 5, //图标大小
          },
          lineStyle: {
              normal: {
                  color:'#00eaff',
                  width: 1, //尾迹线条宽度
                  opacity:.7, //尾迹线条透明度
                  curveness: .3, //尾迹线条曲直度
              },
          },
          data: convertData(item[1])
      },
      {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: { //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          label: {
              normal: {
                  show: true,
                  position: 'right', //显示位置
                  offset: [5, 0], //偏移设置
                  formatter: function(params){//圆环显示文字
                      return params.data.name;
                  },
                  fontSize: 13
              },
              emphasis: {
                  show: true
              }
          },
          symbol: 'circle',
          symbolSize: function(val) {
              return 5+ val[2] * 5; //圆环大小
          },
          itemStyle: {
              normal: {
                  show: true,
                  color: '#00eaff'
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[0].name,
                  value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
                  // visualMap: false
              };
          }),
      },
      //被攻击点
      {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
          },
          label: {
              normal: {
                  show: false,    //定位点名字
                  position: 'right',
                  // offset:[5, 0],
                  color: '#0f0',
                  formatter: '{b}',
                  textStyle: {
                      color: "#0f0"
                  }
              },
              emphasis: {
                  // show: false,   //定位标记
                  color: "#f60"
              }
          },
          symbol: 'pin',  //定位图标样式
          symbolSize: 50,
          data: [{
              name: item[0],
              value: chinaGeoCoordMap[item[0]].concat([10]),
          }],
      }
  );
});

option = {
backgroundColor: '#061d4d',
  geo: {
      map: 'china',
      aspectScale: 0.85,
      layoutCenter: ["50%", "50%"], //地图位置
      layoutSize: '100%',
      itemStyle: {
          normal: {
              shadowColor: '#276fce',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
              opacity: 0.5,
          },
          emphasis: {
              areaColor: '#276fce',

          }
      },
      regions: [{
          name: '南海诸岛',
          itemStyle: {
              areaColor: 'rgba(0, 10, 52, 1)',

              borderColor: 'rgba(0, 10, 52, 1)',
              normal: {
                  opacity: 0,
                  label: {
                      show: false,
                      color: "#009cc9",
                  }
              },


          },
          label: {
              show: false,
              color: '#FFFFFF',
              fontSize: 12,
          },


      }],

  },
  series: series
};
myChart.setOption(option);
})();
