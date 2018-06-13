// Create the chart
Highcharts.chart('charts', {
chart: {
  type: 'column'
},
title: {
  text: 'avaliable tool & language'
},
xAxis: {
  type: 'category'
},
yAxis: {
  title: {
      text: 'skill peformance percent'
  }

},
legend: {
  enabled: false
},
plotOptions: {
  series: {
      borderWidth: 0,
      dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
      }
  }
},

tooltip: {
  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

"series": [
  {
      "name": "language",
      "colorByPoint": false,
      "data": [
          {
              "name": "javacript",
              "y": 82,
              "drilldown": "javascript"
          },
          {
              "name": "database",
              "y": 80,
              "drilldown": "database"
          },
          {
              "name": "bundler",
              "y": 70,
              "drilldown": "bundler"
          },
          {
              "name": "html5",
              "y": 92,
              "drilldown": "html5"
          },
          {
              "name": "framework",
              "y": 70,
              "drilldown": "framework"
          },
          {
              "name": "graphic",
              "y": 95,
              "drilldown": "graphic"
          },
          {
              "name": "UX/UI",
              "y": 75,
              "drilldown": "UX/UI"
          }
      ]
  }
],
"drilldown": {
  "series": [
      {
          "name": "javascript",
          "id": "javascript",
          "data": [
              [
                  "javascript",
                  80
              ],
              [
                  "jqeury",
                  85
              ]
          ]
      },
      {
          "name": "database",
          "id": "database",
          "data": [
              [
                  "mysql",
                  70
              ],
              [
                  "firebase",
                  85
              ]
          ]
      },
      {
          "name": "bundler",
          "id": "bundler",
          "data": [
              [
                  "webpack",
                  75
              ],
              [
                  "browserify",
                  65
              ]
          ]
      },
      {
          "name": "html5",
          "id": "html5",
          "data": [
              [
                  "css3",
                  100
              ],
              [
                  "flex",
                  90
              ],
              [
                  "cross browsing",
                  95
              ]
          ]
      },
      {
          "name": "framework",
          "id": "framework",
          "data": [
              [
                  "vue js",
                  70
              ],
              [
                  "angular",
                  30
              ],
              [
                  "jquery mobile",
                  45
              ]
          ]
      },
      {
          "name": "graphic",
          "id": "graphic",
          "data": [
              [
                  "adobe photoshop",
                  100
              ],
              [
                  "adobe illustrator",
                  90
              ],
              [
                  "sketch",
                  50
              ]
          ]
      },
      {
          "name": "UX/UI",
          "id": "UX/UI",
          "data": [
              [
                  "sketch",
                  50
              ],
              [
                  "zeplin",
                  60
              ]
          ]
      }
  ]
}
});
