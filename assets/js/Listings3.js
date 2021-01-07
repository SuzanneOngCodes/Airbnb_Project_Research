// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace2 = {
  line: {color: 'cornflowerblue'}, 
  name: 'Singapore', 
  type: 'scatter', 
  xsrc: 'Sue99:7:b37e79', 
  x: ['2019-12-01T00:00:00', '2019-12-02T00:00:00', '2019-12-03T00:00:00', '2019-12-04T00:00:00', '2019-12-05T00:00:00', '2019-12-06T00:00:00', '2019-12-07T00:00:00', '2019-12-08T00:00:00', '2019-12-09T00:00:00', '2019-12-10T00:00:00', '2019-12-11T00:00:00', '2019-12-12T00:00:00', '2019-12-13T00:00:00', '2019-12-14T00:00:00', '2019-12-15T00:00:00', '2019-12-16T00:00:00', '2019-12-17T00:00:00', '2019-12-18T00:00:00', '2019-12-19T00:00:00', '2019-12-20T00:00:00', '2019-12-21T00:00:00', '2019-12-22T00:00:00', '2019-12-23T00:00:00', '2019-12-24T00:00:00', '2019-12-25T00:00:00', '2019-12-26T00:00:00', '2019-12-27T00:00:00', '2019-12-28T00:00:00', '2019-12-29T00:00:00', '2019-12-30T00:00:00', '2019-12-31T00:00:00', '2020-01-01T00:00:00', '2020-01-02T00:00:00', '2020-01-03T00:00:00', '2020-01-04T00:00:00', '2020-01-05T00:00:00', '2020-01-06T00:00:00', '2020-01-07T00:00:00', '2020-01-08T00:00:00', '2020-01-09T00:00:00', '2020-01-10T00:00:00', '2020-01-11T00:00:00', '2020-01-12T00:00:00', '2020-01-13T00:00:00', '2020-01-14T00:00:00', '2020-01-15T00:00:00', '2020-01-16T00:00:00', '2020-01-17T00:00:00', '2020-01-18T00:00:00', '2020-01-19T00:00:00', '2020-01-20T00:00:00', '2020-01-21T00:00:00', '2020-01-22T00:00:00', '2020-01-23T00:00:00', '2020-01-24T00:00:00', '2020-01-25T00:00:00', '2020-01-26T00:00:00', '2020-01-27T00:00:00', '2020-01-28T00:00:00', '2020-01-29T00:00:00', '2020-01-30T00:00:00', '2020-01-31T00:00:00', '2020-02-01T00:00:00', '2020-02-02T00:00:00', '2020-02-03T00:00:00', '2020-02-04T00:00:00', '2020-02-05T00:00:00', '2020-02-06T00:00:00', '2020-02-07T00:00:00', '2020-02-08T00:00:00', '2020-02-09T00:00:00', '2020-02-10T00:00:00', '2020-02-11T00:00:00', '2020-02-12T00:00:00', '2020-02-13T00:00:00', '2020-02-14T00:00:00', '2020-02-15T00:00:00', '2020-02-16T00:00:00', '2020-02-17T00:00:00', '2020-02-18T00:00:00', '2020-02-19T00:00:00', '2020-02-20T00:00:00', '2020-02-21T00:00:00', '2020-02-22T00:00:00', '2020-02-23T00:00:00', '2020-02-24T00:00:00', '2020-02-25T00:00:00', '2020-02-26T00:00:00', '2020-02-27T00:00:00', '2020-02-28T00:00:00', '2020-02-29T00:00:00', '2020-03-01T00:00:00', '2020-03-02T00:00:00', '2020-03-03T00:00:00', '2020-03-04T00:00:00', '2020-03-05T00:00:00', '2020-03-06T00:00:00', '2020-03-07T00:00:00', '2020-03-08T00:00:00', '2020-03-09T00:00:00', '2020-03-10T00:00:00', '2020-03-11T00:00:00', '2020-03-12T00:00:00', '2020-03-13T00:00:00', '2020-03-14T00:00:00', '2020-03-15T00:00:00', '2020-03-16T00:00:00', '2020-03-17T00:00:00', '2020-03-18T00:00:00', '2020-03-19T00:00:00', '2020-03-20T00:00:00', '2020-03-21T00:00:00', '2020-03-22T00:00:00', '2020-03-23T00:00:00', '2020-03-24T00:00:00', '2020-03-25T00:00:00', '2020-03-26T00:00:00', '2020-03-27T00:00:00', '2020-03-28T00:00:00', '2020-03-29T00:00:00', '2020-03-30T00:00:00', '2020-03-31T00:00:00', '2020-04-01T00:00:00', '2020-04-02T00:00:00', '2020-04-03T00:00:00', '2020-04-04T00:00:00', '2020-04-05T00:00:00', '2020-04-06T00:00:00', '2020-04-07T00:00:00', '2020-04-08T00:00:00', '2020-04-09T00:00:00', '2020-04-10T00:00:00', '2020-04-11T00:00:00', '2020-04-12T00:00:00', '2020-04-13T00:00:00', '2020-04-14T00:00:00', '2020-04-15T00:00:00', '2020-04-16T00:00:00', '2020-04-17T00:00:00', '2020-04-18T00:00:00', '2020-04-19T00:00:00', '2020-04-20T00:00:00', '2020-04-21T00:00:00', '2020-04-22T00:00:00', '2020-04-23T00:00:00', '2020-04-24T00:00:00', '2020-04-25T00:00:00', '2020-04-26T00:00:00', '2020-04-27T00:00:00', '2020-04-28T00:00:00', '2020-04-29T00:00:00', '2020-04-30T00:00:00', '2020-05-01T00:00:00', '2020-05-02T00:00:00', '2020-05-03T00:00:00', '2020-05-04T00:00:00', '2020-05-05T00:00:00', '2020-05-06T00:00:00', '2020-05-07T00:00:00', '2020-05-08T00:00:00', '2020-05-09T00:00:00', '2020-05-10T00:00:00', '2020-05-11T00:00:00', '2020-05-12T00:00:00', '2020-05-13T00:00:00', '2020-05-14T00:00:00', '2020-05-15T00:00:00', '2020-05-16T00:00:00', '2020-05-17T00:00:00', '2020-05-18T00:00:00', '2020-05-19T00:00:00', '2020-05-20T00:00:00', '2020-05-21T00:00:00', '2020-05-22T00:00:00', '2020-05-23T00:00:00', '2020-05-24T00:00:00', '2020-05-25T00:00:00', '2020-05-26T00:00:00', '2020-05-27T00:00:00', '2020-05-28T00:00:00', '2020-05-29T00:00:00', '2020-05-30T00:00:00', '2020-05-31T00:00:00', '2020-06-01T00:00:00'], 
  ysrc: 'Sue99:7:de758c', 
  y: [148, 139, 89, 98, 84, 79, 96, 145, 98, 85, 75, 60, 76, 98, 121, 101, 87, 79, 79, 91, 94, 114, 101, 74, 98, 99, 90, 105, 111, 117, 109, 190, 182, 149, 120, 107, 96, 87, 90, 87, 110, 89, 103, 119, 96, 102, 113, 134, 108, 135, 118, 121, 109, 88, 92, 96, 119, 140, 100, 94, 83, 109, 105, 110, 77, 80, 84, 75, 84, 88, 113, 102, 86, 76, 72, 73, 96, 97, 95, 71, 54, 57, 59, 71, 99, 64, 53, 55, 47, 79, 85, 92, 56, 62, 45, 44, 67, 58, 63, 64, 41, 39, 48, 55, 49, 67, 61, 36, 41, 33, 48, 38, 46, 21, 17, 23, 7, 17, 22, 29, 27, 55, 36, 17, 20, 24, 28, 21, 18, 20, 22, 20, 18, 31, 16, 26, 31, 20, 28, 29, 34, 24, 20, 17, 22, 15, 17, 22, 13, 15, 18, 49, 25, 19, 18, 31, 15, 29, 23, 25, 24, 25, 27, 13, 32, 22, 28, 19, 37, 18, 14, 24, 22, 21, 25, 21, 29, 26, 18, 13, 26, 21, 52, 47]
};
trace1 = {
  line: {
    color: 'darkblue', 
    width: 5
  }, 
  name: 'Total Average', 
  type: 'scatter', 
  xsrc: 'Sue99:7:c1baa1', 
  x: ['2019-12-01T00:00:00', '2019-12-02T00:00:00', '2019-12-03T00:00:00', '2019-12-04T00:00:00', '2019-12-05T00:00:00', '2019-12-06T00:00:00', '2019-12-07T00:00:00', '2019-12-08T00:00:00', '2019-12-09T00:00:00', '2019-12-10T00:00:00', '2019-12-11T00:00:00', '2019-12-12T00:00:00', '2019-12-13T00:00:00', '2019-12-14T00:00:00', '2019-12-15T00:00:00', '2019-12-16T00:00:00', '2019-12-17T00:00:00', '2019-12-18T00:00:00', '2019-12-19T00:00:00', '2019-12-20T00:00:00', '2019-12-21T00:00:00', '2019-12-22T00:00:00', '2019-12-23T00:00:00', '2019-12-24T00:00:00', '2019-12-25T00:00:00', '2019-12-26T00:00:00', '2019-12-27T00:00:00', '2019-12-28T00:00:00', '2019-12-29T00:00:00', '2019-12-30T00:00:00', '2019-12-31T00:00:00', '2020-01-01T00:00:00', '2020-01-02T00:00:00', '2020-01-03T00:00:00', '2020-01-04T00:00:00', '2020-01-05T00:00:00', '2020-01-06T00:00:00', '2020-01-07T00:00:00', '2020-01-08T00:00:00', '2020-01-09T00:00:00', '2020-01-10T00:00:00', '2020-01-11T00:00:00', '2020-01-12T00:00:00', '2020-01-13T00:00:00', '2020-01-14T00:00:00', '2020-01-15T00:00:00', '2020-01-16T00:00:00', '2020-01-17T00:00:00', '2020-01-18T00:00:00', '2020-01-19T00:00:00', '2020-01-20T00:00:00', '2020-01-21T00:00:00', '2020-01-22T00:00:00', '2020-01-23T00:00:00', '2020-01-24T00:00:00', '2020-01-25T00:00:00', '2020-01-26T00:00:00', '2020-01-27T00:00:00', '2020-01-28T00:00:00', '2020-01-29T00:00:00', '2020-01-30T00:00:00', '2020-01-31T00:00:00', '2020-02-01T00:00:00', '2020-02-02T00:00:00', '2020-02-03T00:00:00', '2020-02-04T00:00:00', '2020-02-05T00:00:00', '2020-02-06T00:00:00', '2020-02-07T00:00:00', '2020-02-08T00:00:00', '2020-02-09T00:00:00', '2020-02-10T00:00:00', '2020-02-11T00:00:00', '2020-02-12T00:00:00', '2020-02-13T00:00:00', '2020-02-14T00:00:00', '2020-02-15T00:00:00', '2020-02-16T00:00:00', '2020-02-17T00:00:00', '2020-02-18T00:00:00', '2020-02-19T00:00:00', '2020-02-20T00:00:00', '2020-02-21T00:00:00', '2020-02-22T00:00:00', '2020-02-23T00:00:00', '2020-02-24T00:00:00', '2020-02-25T00:00:00', '2020-02-26T00:00:00', '2020-02-27T00:00:00', '2020-02-28T00:00:00', '2020-02-29T00:00:00', '2020-03-01T00:00:00', '2020-03-02T00:00:00', '2020-03-03T00:00:00', '2020-03-04T00:00:00', '2020-03-05T00:00:00', '2020-03-06T00:00:00', '2020-03-07T00:00:00', '2020-03-08T00:00:00', '2020-03-09T00:00:00', '2020-03-10T00:00:00', '2020-03-11T00:00:00', '2020-03-12T00:00:00', '2020-03-13T00:00:00', '2020-03-14T00:00:00', '2020-03-15T00:00:00', '2020-03-16T00:00:00', '2020-03-17T00:00:00', '2020-03-18T00:00:00', '2020-03-19T00:00:00', '2020-03-20T00:00:00', '2020-03-21T00:00:00', '2020-03-22T00:00:00', '2020-03-23T00:00:00', '2020-03-24T00:00:00', '2020-03-25T00:00:00', '2020-03-26T00:00:00', '2020-03-27T00:00:00', '2020-03-28T00:00:00', '2020-03-29T00:00:00', '2020-03-30T00:00:00', '2020-03-31T00:00:00', '2020-04-01T00:00:00', '2020-04-02T00:00:00', '2020-04-03T00:00:00', '2020-04-04T00:00:00', '2020-04-05T00:00:00', '2020-04-06T00:00:00', '2020-04-07T00:00:00', '2020-04-08T00:00:00', '2020-04-09T00:00:00', '2020-04-10T00:00:00', '2020-04-11T00:00:00', '2020-04-12T00:00:00', '2020-04-13T00:00:00', '2020-04-14T00:00:00', '2020-04-15T00:00:00', '2020-04-16T00:00:00', '2020-04-17T00:00:00', '2020-04-18T00:00:00', '2020-04-19T00:00:00', '2020-04-20T00:00:00', '2020-04-21T00:00:00', '2020-04-22T00:00:00', '2020-04-23T00:00:00', '2020-04-24T00:00:00', '2020-04-25T00:00:00', '2020-04-26T00:00:00', '2020-04-27T00:00:00', '2020-04-28T00:00:00', '2020-04-29T00:00:00', '2020-04-30T00:00:00', '2020-05-01T00:00:00', '2020-05-02T00:00:00', '2020-05-03T00:00:00', '2020-05-04T00:00:00', '2020-05-05T00:00:00', '2020-05-06T00:00:00', '2020-05-07T00:00:00', '2020-05-08T00:00:00', '2020-05-09T00:00:00', '2020-05-10T00:00:00', '2020-05-11T00:00:00', '2020-05-12T00:00:00', '2020-05-13T00:00:00', '2020-05-14T00:00:00', '2020-05-15T00:00:00', '2020-05-16T00:00:00', '2020-05-17T00:00:00', '2020-05-18T00:00:00', '2020-05-19T00:00:00', '2020-05-20T00:00:00', '2020-05-21T00:00:00', '2020-05-22T00:00:00', '2020-05-23T00:00:00', '2020-05-24T00:00:00', '2020-05-25T00:00:00', '2020-05-26T00:00:00', '2020-05-27T00:00:00', '2020-05-28T00:00:00', '2020-05-29T00:00:00', '2020-05-30T00:00:00', '2020-05-31T00:00:00', '2020-06-01T00:00:00'], 
  ysrc: 'Sue99:7:9a9bae', 
  y: [462.55555555555554, 320.22222222222223, 286.44444444444446, 273.3333333333333, 279.6666666666667, 339.1111111111111, 536.3333333333334, 442.77777777777777, 314.77777777777777, 269.44444444444446, 263.8888888888889, 281.3333333333333, 293.8888888888889, 482.6666666666667, 434.6666666666667, 331.8888888888889, 275.8888888888889, 268.3333333333333, 292.8888888888889, 320.77777777777777, 476.1111111111111, 438.22222222222223, 340.3333333333333, 325.55555555555554, 377.1111111111111, 425.22222222222223, 407.77777777777777, 478.44444444444446, 444.55555555555554, 430.77777777777777, 734.4444444444445, 670.1111111111111, 577.1111111111111, 456.3333333333333, 515.7777777777778, 405.1111111111111, 331.44444444444446, 314.3333333333333, 301.55555555555554, 338.22222222222223, 350.44444444444446, 432.77777777777777, 389.55555555555554, 352.1111111111111, 316.22222222222223, 317.1111111111111, 317.6666666666667, 326.44444444444446, 390.1111111111111, 398.1111111111111, 348.44444444444446, 307.44444444444446, 305.22222222222223, 274.22222222222223, 270.0, 320.44444444444446, 412.6666666666667, 329.22222222222223, 262.8888888888889, 237.44444444444446, 252.66666666666666, 243.33333333333334, 307.6666666666667, 299.55555555555554, 203.66666666666666, 181.33333333333334, 172.33333333333334, 186.66666666666666, 197.55555555555554, 291.8888888888889, 278.1111111111111, 187.77777777777777, 180.11111111111111, 166.88888888888889, 189.33333333333334, 215.44444444444446, 317.6666666666667, 304.3333333333333, 204.44444444444446, 170.66666666666666, 172.44444444444446, 183.11111111111111, 186.11111111111111, 300.55555555555554, 287.8888888888889, 208.66666666666666, 166.88888888888889, 164.66666666666666, 175.33333333333334, 203.22222222222223, 317.55555555555554, 271.55555555555554, 168.66666666666666, 144.44444444444446, 141.66666666666666, 152.33333333333334, 175.66666666666666, 258.8888888888889, 227.66666666666666, 225.66666666666666, 141.44444444444446, 123.11111111111111, 140.77777777777777, 154.0, 216.55555555555554, 288.3333333333333, 196.44444444444446, 129.33333333333334, 115.88888888888889, 114.55555555555556, 122.77777777777777, 156.33333333333334, 165.33333333333334, 87.66666666666667, 76.22222222222223, 67.88888888888889, 73.55555555555556, 71.33333333333333, 82.0, 87.88888888888889, 70.33333333333333, 77.0, 55.333333333333336, 58.44444444444444, 58.888888888888886, 65.77777777777777, 85.11111111111111, 49.333333333333336, 40.22222222222222, 46.666666666666664, 46.0, 55.0, 58.0, 60.666666666666664, 46.44444444444444, 38.55555555555556, 40.111111111111114, 37.55555555555556, 45.333333333333336, 61.55555555555556, 61.0, 39.77777777777778, 32.55555555555556, 32.333333333333336, 33.22222222222222, 45.333333333333336, 49.77777777777778, 55.44444444444444, 41.0, 29.333333333333332, 44.44444444444444, 64.66666666666667, 71.22222222222223, 84.66666666666667, 89.44444444444444, 73.77777777777777, 48.333333333333336, 46.55555555555556, 42.22222222222222, 40.55555555555556, 60.44444444444444, 64.77777777777777, 43.888888888888886, 37.111111111111114, 40.666666666666664, 43.44444444444444, 63.77777777777778, 82.55555555555556, 83.66666666666667, 52.0, 46.666666666666664, 51.55555555555556, 54.22222222222222, 68.22222222222223, 97.33333333333333, 97.66666666666667, 62.55555555555556, 53.77777777777778, 58.0, 58.22222222222222, 78.55555555555556, 133.77777777777777, 148.88888888888889, 90.88888888888889]
};
trace3 = {
  line: {color: 'chocolate'}, 
  name: 'Taiwan', 
  type: 'scatter', 
  xsrc: 'Sue99:7:dfacb2', 
  x: ['2019-12-01T00:00:00', '2019-12-02T00:00:00', '2019-12-03T00:00:00', '2019-12-04T00:00:00', '2019-12-05T00:00:00', '2019-12-06T00:00:00', '2019-12-07T00:00:00', '2019-12-08T00:00:00', '2019-12-09T00:00:00', '2019-12-10T00:00:00', '2019-12-11T00:00:00', '2019-12-12T00:00:00', '2019-12-13T00:00:00', '2019-12-14T00:00:00', '2019-12-15T00:00:00', '2019-12-16T00:00:00', '2019-12-17T00:00:00', '2019-12-18T00:00:00', '2019-12-19T00:00:00', '2019-12-20T00:00:00', '2019-12-21T00:00:00', '2019-12-22T00:00:00', '2019-12-23T00:00:00', '2019-12-24T00:00:00', '2019-12-25T00:00:00', '2019-12-26T00:00:00', '2019-12-27T00:00:00', '2019-12-28T00:00:00', '2019-12-29T00:00:00', '2019-12-30T00:00:00', '2019-12-31T00:00:00', '2020-01-01T00:00:00', '2020-01-02T00:00:00', '2020-01-03T00:00:00', '2020-01-04T00:00:00', '2020-01-05T00:00:00', '2020-01-06T00:00:00', '2020-01-07T00:00:00', '2020-01-08T00:00:00', '2020-01-09T00:00:00', '2020-01-10T00:00:00', '2020-01-11T00:00:00', '2020-01-12T00:00:00', '2020-01-13T00:00:00', '2020-01-14T00:00:00', '2020-01-15T00:00:00', '2020-01-16T00:00:00', '2020-01-17T00:00:00', '2020-01-18T00:00:00', '2020-01-19T00:00:00', '2020-01-20T00:00:00', '2020-01-21T00:00:00', '2020-01-22T00:00:00', '2020-01-23T00:00:00', '2020-01-24T00:00:00', '2020-01-25T00:00:00', '2020-01-26T00:00:00', '2020-01-27T00:00:00', '2020-01-28T00:00:00', '2020-01-29T00:00:00', '2020-01-30T00:00:00', '2020-01-31T00:00:00', '2020-02-01T00:00:00', '2020-02-02T00:00:00', '2020-02-03T00:00:00', '2020-02-04T00:00:00', '2020-02-05T00:00:00', '2020-02-06T00:00:00', '2020-02-07T00:00:00', '2020-02-08T00:00:00', '2020-02-09T00:00:00', '2020-02-10T00:00:00', '2020-02-11T00:00:00', '2020-02-12T00:00:00', '2020-02-13T00:00:00', '2020-02-14T00:00:00', '2020-02-15T00:00:00', '2020-02-16T00:00:00', '2020-02-17T00:00:00', '2020-02-18T00:00:00', '2020-02-19T00:00:00', '2020-02-20T00:00:00', '2020-02-21T00:00:00', '2020-02-22T00:00:00', '2020-02-23T00:00:00', '2020-02-24T00:00:00', '2020-02-25T00:00:00', '2020-02-26T00:00:00', '2020-02-27T00:00:00', '2020-02-28T00:00:00', '2020-02-29T00:00:00', '2020-03-01T00:00:00', '2020-03-02T00:00:00', '2020-03-03T00:00:00', '2020-03-04T00:00:00', '2020-03-05T00:00:00', '2020-03-06T00:00:00', '2020-03-07T00:00:00', '2020-03-08T00:00:00', '2020-03-09T00:00:00', '2020-03-10T00:00:00', '2020-03-11T00:00:00', '2020-03-12T00:00:00', '2020-03-13T00:00:00', '2020-03-14T00:00:00', '2020-03-15T00:00:00', '2020-03-16T00:00:00', '2020-03-17T00:00:00', '2020-03-18T00:00:00', '2020-03-19T00:00:00', '2020-03-20T00:00:00', '2020-03-21T00:00:00', '2020-03-22T00:00:00', '2020-03-23T00:00:00', '2020-03-24T00:00:00', '2020-03-25T00:00:00', '2020-03-26T00:00:00', '2020-03-27T00:00:00', '2020-03-28T00:00:00', '2020-03-29T00:00:00', '2020-03-30T00:00:00', '2020-03-31T00:00:00', '2020-04-01T00:00:00', '2020-04-02T00:00:00', '2020-04-03T00:00:00', '2020-04-04T00:00:00', '2020-04-05T00:00:00', '2020-04-06T00:00:00', '2020-04-07T00:00:00', '2020-04-08T00:00:00', '2020-04-09T00:00:00', '2020-04-10T00:00:00', '2020-04-11T00:00:00', '2020-04-12T00:00:00', '2020-04-13T00:00:00', '2020-04-14T00:00:00', '2020-04-15T00:00:00', '2020-04-16T00:00:00', '2020-04-17T00:00:00', '2020-04-18T00:00:00', '2020-04-19T00:00:00', '2020-04-20T00:00:00', '2020-04-21T00:00:00', '2020-04-22T00:00:00', '2020-04-23T00:00:00', '2020-04-24T00:00:00', '2020-04-25T00:00:00', '2020-04-26T00:00:00', '2020-04-27T00:00:00', '2020-04-28T00:00:00', '2020-04-29T00:00:00', '2020-04-30T00:00:00', '2020-05-01T00:00:00', '2020-05-02T00:00:00', '2020-05-03T00:00:00', '2020-05-04T00:00:00', '2020-05-05T00:00:00', '2020-05-06T00:00:00', '2020-05-07T00:00:00', '2020-05-08T00:00:00', '2020-05-09T00:00:00', '2020-05-10T00:00:00', '2020-05-11T00:00:00', '2020-05-12T00:00:00', '2020-05-13T00:00:00', '2020-05-14T00:00:00', '2020-05-15T00:00:00', '2020-05-16T00:00:00', '2020-05-17T00:00:00', '2020-05-18T00:00:00', '2020-05-19T00:00:00', '2020-05-20T00:00:00', '2020-05-21T00:00:00', '2020-05-22T00:00:00', '2020-05-23T00:00:00', '2020-05-24T00:00:00', '2020-05-25T00:00:00', '2020-05-26T00:00:00', '2020-05-27T00:00:00', '2020-05-28T00:00:00', '2020-05-29T00:00:00', '2020-05-30T00:00:00', '2020-05-31T00:00:00', '2020-06-01T00:00:00'], 
  ysrc: 'Sue99:7:30610d', 
  y: [533, 306, 245, 205, 179, 207, 296, 557, 336, 257, 220, 227, 213, 314, 614, 433, 267, 225, 214, 239, 283, 493, 366, 276, 279, 366, 342, 371, 500, 421, 376, 620, 531, 363, 407, 486, 318, 263, 224, 219, 259, 239, 340, 297, 277, 237, 203, 193, 230, 445, 298, 222, 166, 165, 130, 146, 182, 290, 356, 360, 241, 234, 250, 322, 206, 184, 142, 145, 202, 221, 319, 217, 184, 152, 142, 158, 200, 288, 170, 116, 103, 117, 130, 148, 273, 166, 120, 114, 85, 114, 221, 275, 113, 81, 76, 84, 96, 124, 165, 98, 92, 71, 83, 77, 100, 212, 92, 81, 72, 69, 68, 72, 111, 46, 46, 34, 43, 47, 55, 110, 44, 64, 40, 75, 67, 72, 92, 32, 28, 40, 40, 44, 50, 102, 40, 37, 33, 32, 55, 47, 104, 41, 34, 21, 28, 47, 42, 84, 52, 22, 32, 48, 55, 56, 100, 35, 23, 27, 31, 34, 71, 65, 30, 25, 30, 21, 52, 65, 126, 41, 34, 20, 42, 51, 55, 133, 40, 30, 37, 21, 40, 80, 157, 69]
};
trace4 = {
  line: {color: 'rebeccapurple'}, 
  name: 'Tokyo', 
  type: 'scatter', 
  xsrc: 'Sue99:7:1db969', 
  x: ['2019-12-01T00:00:00', '2019-12-02T00:00:00', '2019-12-03T00:00:00', '2019-12-04T00:00:00', '2019-12-05T00:00:00', '2019-12-06T00:00:00', '2019-12-07T00:00:00', '2019-12-08T00:00:00', '2019-12-09T00:00:00', '2019-12-10T00:00:00', '2019-12-11T00:00:00', '2019-12-12T00:00:00', '2019-12-13T00:00:00', '2019-12-14T00:00:00', '2019-12-15T00:00:00', '2019-12-16T00:00:00', '2019-12-17T00:00:00', '2019-12-18T00:00:00', '2019-12-19T00:00:00', '2019-12-20T00:00:00', '2019-12-21T00:00:00', '2019-12-22T00:00:00', '2019-12-23T00:00:00', '2019-12-24T00:00:00', '2019-12-25T00:00:00', '2019-12-26T00:00:00', '2019-12-27T00:00:00', '2019-12-28T00:00:00', '2019-12-29T00:00:00', '2019-12-30T00:00:00', '2019-12-31T00:00:00', '2020-01-01T00:00:00', '2020-01-02T00:00:00', '2020-01-03T00:00:00', '2020-01-04T00:00:00', '2020-01-05T00:00:00', '2020-01-06T00:00:00', '2020-01-07T00:00:00', '2020-01-08T00:00:00', '2020-01-09T00:00:00', '2020-01-10T00:00:00', '2020-01-11T00:00:00', '2020-01-12T00:00:00', '2020-01-13T00:00:00', '2020-01-14T00:00:00', '2020-01-15T00:00:00', '2020-01-16T00:00:00', '2020-01-17T00:00:00', '2020-01-18T00:00:00', '2020-01-19T00:00:00', '2020-01-20T00:00:00', '2020-01-21T00:00:00', '2020-01-22T00:00:00', '2020-01-23T00:00:00', '2020-01-24T00:00:00', '2020-01-25T00:00:00', '2020-01-26T00:00:00', '2020-01-27T00:00:00', '2020-01-28T00:00:00', '2020-01-29T00:00:00', '2020-01-30T00:00:00', '2020-01-31T00:00:00', '2020-02-01T00:00:00', '2020-02-02T00:00:00', '2020-02-03T00:00:00', '2020-02-04T00:00:00', '2020-02-05T00:00:00', '2020-02-06T00:00:00', '2020-02-07T00:00:00', '2020-02-08T00:00:00', '2020-02-09T00:00:00', '2020-02-10T00:00:00', '2020-02-11T00:00:00', '2020-02-12T00:00:00', '2020-02-13T00:00:00', '2020-02-14T00:00:00', '2020-02-15T00:00:00', '2020-02-16T00:00:00', '2020-02-17T00:00:00', '2020-02-18T00:00:00', '2020-02-19T00:00:00', '2020-02-20T00:00:00', '2020-02-21T00:00:00', '2020-02-22T00:00:00', '2020-02-23T00:00:00', '2020-02-24T00:00:00', '2020-02-25T00:00:00', '2020-02-26T00:00:00', '2020-02-27T00:00:00', '2020-02-28T00:00:00', '2020-02-29T00:00:00', '2020-03-01T00:00:00', '2020-03-02T00:00:00', '2020-03-03T00:00:00', '2020-03-04T00:00:00', '2020-03-05T00:00:00', '2020-03-06T00:00:00', '2020-03-07T00:00:00', '2020-03-08T00:00:00', '2020-03-09T00:00:00', '2020-03-10T00:00:00', '2020-03-11T00:00:00', '2020-03-12T00:00:00', '2020-03-13T00:00:00', '2020-03-14T00:00:00', '2020-03-15T00:00:00', '2020-03-16T00:00:00', '2020-03-17T00:00:00', '2020-03-18T00:00:00', '2020-03-19T00:00:00', '2020-03-20T00:00:00', '2020-03-21T00:00:00', '2020-03-22T00:00:00', '2020-03-23T00:00:00', '2020-03-24T00:00:00', '2020-03-25T00:00:00', '2020-03-26T00:00:00', '2020-03-27T00:00:00', '2020-03-28T00:00:00', '2020-03-29T00:00:00', '2020-03-30T00:00:00', '2020-03-31T00:00:00', '2020-04-01T00:00:00', '2020-04-02T00:00:00', '2020-04-03T00:00:00', '2020-04-04T00:00:00', '2020-04-05T00:00:00', '2020-04-06T00:00:00', '2020-04-07T00:00:00', '2020-04-08T00:00:00', '2020-04-09T00:00:00', '2020-04-10T00:00:00', '2020-04-11T00:00:00', '2020-04-12T00:00:00', '2020-04-13T00:00:00', '2020-04-14T00:00:00', '2020-04-15T00:00:00', '2020-04-16T00:00:00', '2020-04-17T00:00:00', '2020-04-18T00:00:00', '2020-04-19T00:00:00', '2020-04-20T00:00:00', '2020-04-21T00:00:00', '2020-04-22T00:00:00', '2020-04-23T00:00:00', '2020-04-24T00:00:00', '2020-04-25T00:00:00', '2020-04-26T00:00:00', '2020-04-27T00:00:00', '2020-04-28T00:00:00', '2020-04-29T00:00:00', '2020-04-30T00:00:00', '2020-05-01T00:00:00', '2020-05-02T00:00:00', '2020-05-03T00:00:00', '2020-05-04T00:00:00', '2020-05-05T00:00:00', '2020-05-06T00:00:00', '2020-05-07T00:00:00', '2020-05-08T00:00:00', '2020-05-09T00:00:00', '2020-05-10T00:00:00', '2020-05-11T00:00:00', '2020-05-12T00:00:00', '2020-05-13T00:00:00', '2020-05-14T00:00:00', '2020-05-15T00:00:00', '2020-05-16T00:00:00', '2020-05-17T00:00:00', '2020-05-18T00:00:00', '2020-05-19T00:00:00', '2020-05-20T00:00:00', '2020-05-21T00:00:00', '2020-05-22T00:00:00', '2020-05-23T00:00:00', '2020-05-24T00:00:00', '2020-05-25T00:00:00', '2020-05-26T00:00:00', '2020-05-27T00:00:00', '2020-05-28T00:00:00', '2020-05-29T00:00:00', '2020-05-30T00:00:00', '2020-05-31T00:00:00', '2020-06-01T00:00:00'], 
  ysrc: 'Sue99:7:dca942', 
  y: [808, 562, 501, 443, 389, 436, 617, 705, 508, 436, 400, 412, 448, 582, 711, 544, 432, 456, 394, 442, 586, 802, 635, 637, 759, 669, 526, 517, 658, 683, 776, 930, 924, 737, 744, 643, 441, 391, 361, 350, 395, 477, 616, 655, 492, 531, 497, 495, 595, 694, 600, 530, 527, 471, 520, 653, 710, 626, 554, 518, 537, 459, 547, 588, 468, 428, 448, 421, 393, 499, 612, 517, 532, 438, 415, 431, 496, 638, 491, 454, 379, 363, 352, 457, 596, 576, 424, 359, 335, 372, 440, 405, 336, 310, 293, 270, 305, 326, 300, 306, 303, 216, 255, 234, 249, 364, 266, 239, 250, 234, 248, 319, 386, 206, 220, 225, 226, 203, 193, 239, 176, 192, 123, 86, 92, 127, 150, 102, 71, 74, 69, 101, 92, 129, 78, 67, 84, 70, 80, 100, 124, 79, 60, 62, 52, 70, 109, 115, 68, 50, 75, 130, 117, 119, 112, 124, 159, 173, 70, 40, 96, 127, 44, 45, 41, 42, 69, 86, 114, 57, 37, 53, 40, 47, 84, 139, 65, 47, 41, 44, 66, 111, 267, 99]
};
data = [trace1, trace2, trace3, trace4];
layout = {
  title: {text: 'Airbnb Number of Rooms Occupied For Other Regions'}, 
  xaxis: {
    type: 'date', 
    rangeslider: {visible: true}, 
    rangeselector: {buttons: [
        {
          step: 'day', 
          count: 7, 
          label: '1 week', 
          stepmode: 'backward'
        }, 
        {
          step: 'month', 
          count: 1, 
          label: '1 month', 
          stepmode: 'backward'
        }, 
        {
          step: 'month', 
          count: 3, 
          label: 'Last 3 months', 
          stepmode: 'backward'
        }, 
        {
          step: 'year', 
          count: 1, 
          label: 'Year To Date', 
          stepmode: 'todate'
        }, 
        {
          step: 'all', 
          label: 'All'
        }
      ]}
  }, 
  height: 850, 
  shapes: [
    {
      x0: '2020-03-17', 
      x1: '2020-03-17', 
      y0: 0, 
      y1: 1, 
      line: {
        dash: 'dash', 
        width: 3
      }, 
      type: 'rect', 
      xref: 'x', 
      yref: 'y domain', 
      opacity: 0.75
    }, 
    {
      x0: '2020-03-19', 
      x1: '2020-03-19', 
      y0: 0, 
      y1: 1, 
      line: {
        dash: 'dash', 
        width: 3
      }, 
      type: 'rect', 
      xref: 'x', 
      yref: 'y domain', 
      opacity: 0.75
    }, 
    {
      x0: '2019-12-01', 
      x1: '2020-01-23', 
      y0: 0, 
      y1: 1, 
      line: {width: 0}, 
      type: 'rect', 
      xref: 'x', 
      yref: 'y domain', 
      opacity: 0.25, 
      fillcolor: 'LightGreen'
    }
  ], 
  dragmode: 'zoom', 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {line: {
              color: 'white', 
              width: 0.5
            }}, 
          error_x: {color: 'rgb(36,36,36)'}, 
          error_y: {color: 'rgb(36,36,36)'}
        }
      ], 
      pie: [
        {
          type: 'pie', 
          automargin: true
        }
      ], 
      table: [
        {
          type: 'table', 
          cells: {
            fill: {color: 'rgb(237,237,237)'}, 
            line: {color: 'white'}
          }, 
          header: {
            fill: {color: 'rgb(217,217,217)'}, 
            line: {color: 'white'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: 'rgb(36,36,36)', 
            minorgridcolor: 'white', 
            startlinecolor: 'rgb(36,36,36)'
          }, 
          baxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: 'rgb(36,36,36)', 
            minorgridcolor: 'white', 
            startlinecolor: 'rgb(36,36,36)'
          }
        }
      ], 
      mesh3d: [
        {
          type: 'mesh3d', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }
        }
      ], 
      contour: [
        {
          type: 'contour', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }, 
          colorscale: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
        }
      ], 
      heatmap: [
        {
          type: 'heatmap', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }, 
          colorscale: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
        }
      ], 
      scatter: [
        {
          type: 'scatter', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      surface: [
        {
          type: 'surface', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }, 
          colorscale: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
        }
      ], 
      barpolar: [
        {
          type: 'barpolar', 
          marker: {line: {
              color: 'white', 
              width: 0.5
            }}
        }
      ], 
      heatmapgl: [
        {
          type: 'heatmapgl', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }, 
          colorscale: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
        }
      ], 
      histogram: [
        {
          type: 'histogram', 
          marker: {line: {
              color: 'white', 
              width: 0.6
            }}
        }
      ], 
      parcoords: [
        {
          line: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}, 
          type: 'parcoords'
        }
      ], 
      scatter3d: [
        {
          line: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}, 
          type: 'scatter3d', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      scattergl: [
        {
          type: 'scattergl', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      choropleth: [
        {
          type: 'choropleth', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }
        }
      ], 
      scattergeo: [
        {
          type: 'scattergeo', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      histogram2d: [
        {
          type: 'histogram2d', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }, 
          colorscale: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
        }
      ], 
      scatterpolar: [
        {
          type: 'scatterpolar', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      contourcarpet: [
        {
          type: 'contourcarpet', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }
        }
      ], 
      scattercarpet: [
        {
          type: 'scattercarpet', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      scattermapbox: [
        {
          type: 'scattermapbox', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      scatterpolargl: [
        {
          type: 'scatterpolargl', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      scatterternary: [
        {
          type: 'scatterternary', 
          marker: {colorbar: {
              ticks: 'outside', 
              tickcolor: 'rgb(36,36,36)', 
              outlinewidth: 1
            }}
        }
      ], 
      histogram2dcontour: [
        {
          type: 'histogram2dcontour', 
          colorbar: {
            ticks: 'outside', 
            tickcolor: 'rgb(36,36,36)', 
            outlinewidth: 1
          }, 
          colorscale: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
        }
      ]
    }, 
    layout: {
      geo: {
        bgcolor: 'white', 
        showland: true, 
        lakecolor: 'white', 
        landcolor: 'white', 
        showlakes: true, 
        subunitcolor: 'white'
      }, 
      font: {color: 'rgb(36,36,36)'}, 
      polar: {
        bgcolor: 'white', 
        radialaxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          gridcolor: 'rgb(232,232,232)', 
          linecolor: 'rgb(36,36,36)'
        }, 
        angularaxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          gridcolor: 'rgb(232,232,232)', 
          linecolor: 'rgb(36,36,36)'
        }
      }, 
      scene: {
        xaxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          zeroline: false, 
          gridcolor: 'rgb(232,232,232)', 
          gridwidth: 2, 
          linecolor: 'rgb(36,36,36)', 
          zerolinecolor: 'rgb(36,36,36)', 
          showbackground: true, 
          backgroundcolor: 'white'
        }, 
        yaxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          zeroline: false, 
          gridcolor: 'rgb(232,232,232)', 
          gridwidth: 2, 
          linecolor: 'rgb(36,36,36)', 
          zerolinecolor: 'rgb(36,36,36)', 
          showbackground: true, 
          backgroundcolor: 'white'
        }, 
        zaxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          zeroline: false, 
          gridcolor: 'rgb(232,232,232)', 
          gridwidth: 2, 
          linecolor: 'rgb(36,36,36)', 
          zerolinecolor: 'rgb(36,36,36)', 
          showbackground: true, 
          backgroundcolor: 'white'
        }
      }, 
      title: {x: 0.05}, 
      xaxis: {
        ticks: 'outside', 
        title: {standoff: 15}, 
        showgrid: false, 
        showline: true, 
        zeroline: false, 
        gridcolor: 'rgb(232,232,232)', 
        linecolor: 'rgb(36,36,36)', 
        automargin: true, 
        zerolinecolor: 'rgb(36,36,36)'
      }, 
      yaxis: {
        ticks: 'outside', 
        title: {standoff: 15}, 
        showgrid: false, 
        showline: true, 
        zeroline: false, 
        gridcolor: 'rgb(232,232,232)', 
        linecolor: 'rgb(36,36,36)', 
        automargin: true, 
        zerolinecolor: 'rgb(36,36,36)'
      }, 
      mapbox: {style: 'light'}, 
      ternary: {
        aaxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          gridcolor: 'rgb(232,232,232)', 
          linecolor: 'rgb(36,36,36)'
        }, 
        baxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          gridcolor: 'rgb(232,232,232)', 
          linecolor: 'rgb(36,36,36)'
        }, 
        caxis: {
          ticks: 'outside', 
          showgrid: false, 
          showline: true, 
          gridcolor: 'rgb(232,232,232)', 
          linecolor: 'rgb(36,36,36)'
        }, 
        bgcolor: 'white'
      }, 
      colorway: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B', '#E377C2', '#7F7F7F', '#BCBD22', '#17BECF'], 
      coloraxis: {colorbar: {
          ticks: 'outside', 
          tickcolor: 'rgb(36,36,36)', 
          outlinewidth: 1
        }}, 
      hovermode: 'closest', 
      colorscale: {
        diverging: [['0.0', 'rgb(103,0,31)'], ['0.1', 'rgb(178,24,43)'], ['0.2', 'rgb(214,96,77)'], ['0.3', 'rgb(244,165,130)'], ['0.4', 'rgb(253,219,199)'], ['0.5', 'rgb(247,247,247)'], ['0.6', 'rgb(209,229,240)'], ['0.7', 'rgb(146,197,222)'], ['0.8', 'rgb(67,147,195)'], ['0.9', 'rgb(33,102,172)'], ['1.0', 'rgb(5,48,97)']], 
        sequential: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']], 
        sequentialminus: [['0.0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1.0', '#fde725']]
      }, 
      hoverlabel: {align: 'left'}, 
      plot_bgcolor: 'white', 
      paper_bgcolor: 'white', 
      shapedefaults: {
        line: {width: 0}, 
        opacity: 0.3, 
        fillcolor: 'black'
      }, 
      annotationdefaults: {
        arrowhead: 0, 
        arrowwidth: 1
      }
    }
  }, 
  hovermode: 'x', 
  annotations: [
    {
      x: 0.5, 
      y: -0.05, 
      font: {
        size: 12, 
        color: 'rgb(150,150,150)', 
        family: 'Arial'
      }, 
      text: 'Source: Inside Airbnb & Quartz', 
      xref: 'paper', 
      yref: 'paper', 
      xanchor: 'center', 
      yanchor: 'top', 
      showarrow: false
    }, 
    {
      x: '2020-03-17', 
      y: 1, 
      font: {size: 12}, 
      text: 'Border Closure In Singapore  ',
      xref: 'x', 
      yref: 'y domain', 
      xanchor: 'right', 
      yanchor: 'top', 
      showarrow: false
    }, 
    {
      x: '2020-03-19', 
      y: 1, 
      font: {size: 12}, 
      text: '  Border Closure In Taiwan', 
      xref: 'x', 
      yref: 'y domain', 
      xanchor: 'left', 
      yanchor: 'top', 
      showarrow: false
    }, 
    {
      x: '2019-12-01', 
      y: 1, 
      font: {size: 12}, 
      text: '  Before Wuhan Lockdown',
      xref: 'x', 
      yref: 'y domain', 
      xanchor: 'left', 
      yanchor: 'top', 
      showarrow: false
    }
  ]
};
Plotly.plot('plotly-div3', {
  data: data,
  layout: layout
});