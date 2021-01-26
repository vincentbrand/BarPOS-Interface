<template>
<section class="content pt-3">
    <div class="container-fluid">

        <div class="row">

          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Quick Overview</h5>
                <div class="card-tools">
                  <div class="btn-group">
                    <button type="button" class="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                      <i class="fas fa-wrench"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" role="menu">
                      <a href="#" class="dropdown-item">Month</a>
                      <a href="#" class="dropdown-item">3 Months</a>
                      <a href="#" class="dropdown-item">6 Months</a>
                      <a href="#" class="dropdown-item">1 Year</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <p class="text-center">
                      <strong>1 October, 2020 - 31 December, 2020</strong>
                    </p>
                    <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                      <canvas ref='salesChart' id="salesChart" height="180" style="height: 180px; display: block; width: 553px;" width="553" class="chartjs-render-monitor"></canvas>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <p class="text-center">
                      <strong>Venue Targets</strong>
                    </p>
                    <div class="progress-group">
                      Add Products to Cart
                      <span class="float-right"><b>160</b>/200</span>
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-primary" style="width: 80%"></div>
                      </div>
                    </div>
                    <div class="progress-group">
                      Complete Purchase
                      <span class="float-right"><b>310</b>/400</span>
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-danger" style="width: 75%"></div>
                      </div>
                    </div>
                    <div class="progress-group">
                      <span class="progress-text">Visit Premium Page</span>
                      <span class="float-right"><b>480</b>/800</span>
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-success" style="width: 60%"></div>
                      </div>
                    </div>
                    <div class="progress-group">
                      Send Inquiries
                      <span class="float-right"><b>250</b>/500</span>
                      <div class="progress progress-sm">
                        <div class="progress-bar bg-warning" style="width: 50%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row">
                  <!-- /.col -->
                  <div class="col-sm-4 col-6">
                    <div class="description-block border-right">
                      <!--
                      <span class="description-percentage text-warning"><i class="fas fa-caret-left"></i> 0%</span>
                      -->
                      <h5 class="description-header text-danger">¥1,220.00</h5>
                      <span class="description-text">TODAY</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 col-6">
                    <div class="description-block">
                      <!--
                      <span class="description-percentage text-danger"><i class="fas fa-caret-down"></i> 18%</span>
                      -->
                      <h5 class="description-header text-success">¥3,670.00</h5>
                      <span class="description-text">YESTERDAY</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 col-6">
                    <div class="description-block border-right">
                      <!--
                      <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 17%</span>
                      -->
                      <h5 class="description-header text-success">¥ 15,210.00</h5>
                      <span class="description-text">TOTAL REVENUE</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <hr class="mt-3 pt-3">

        <div class="row">

          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Performance</h3>
              </div>
              <div class="card-body">
                <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <canvas ref="lineChart" id="lineChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 324px;" width="324" height="250" class="chartjs-render-monitor"></canvas>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Month/Year Comparisment</h3>
              </div>
              <div class="card-body">
                <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <canvas ref="barChart" id="barChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 324px;" width="324" height="250" class="chartjs-render-monitor"></canvas>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Categories</h3>
              </div>
              <div class="card-body">
                <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <canvas ref="stackedBarChart" id="stackedBarChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 324px;" width="324" height="250" class="chartjs-render-monitor"></canvas>
                </div>
              </div>
            </div>
          </div>



          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Sales Revenue Origins</h3>
              </div>
              <div class="card-body">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
                <canvas ref="donutChart" id="donutChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 480px;" width="480" height="250" class="chartjs-render-monitor"></canvas>
              </div>
            </div>
          </div>
        </div>


    </div>
</section>
</template>


<script>
const Chart = require('@/assets/js/Chart.min.js')
export default {
    data: () => ({

    }),

    mounted () {
        this.initChart()
    },

    methods: {
        initChart () {
            var salesChartCanvas = this.$refs.salesChart.getContext('2d')
            // var salesChartCanvas = document.getElementById("salesChart")
            var salesChartData = {
                labels: ['October', 'November', 'December'],
                datasets: [
                    {
                    label: 'Digital Goods',
                    backgroundColor: 'rgba(60,141,188,0.9)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    pointRadius: false,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data: [2800, 4800, 4000]
                    },
                    {
                    label: 'Electronics',
                    backgroundColor: 'rgba(210, 214, 222, 1)',
                    borderColor: 'rgba(210, 214, 222, 1)',
                    pointRadius: false,
                    pointColor: 'rgba(210, 214, 222, 1)',
                    pointStrokeColor: '#c1c7d1',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [6500, 5900, 8000]
                    }
                ]
            }

            var salesChartOptions = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                    gridLines: {
                        display: false
                    }
                    }],
                    yAxes: [{
                    gridLines: {
                        display: false
                    }
                    }]
                }
            }

            // This will get the first returned node in the jQuery collection.
            // eslint-disable-next-line no-unused-vars
            var salesChart = new Chart(salesChartCanvas, {
                type: 'line',
                data: salesChartData,
                options: salesChartOptions
            })

            //---------------------------
            // - END MONTHLY SALES CHART -
            //---------------------------


            //--------------
            //- AREA CHART -
            //--------------

            // Get context with jQuery - using jQuery's .get() method.
            // var areaChartCanvas = $('#areaChart').get(0).getContext('2d')
            var areaChartData = {
                labels  : ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                    label               : '2019',
                    backgroundColor     : 'rgba(60,141,188,0.9)',
                    borderColor         : 'rgba(60,141,188,0.8)',
                    pointRadius          : false,
                    pointColor          : '#3b8bba',
                    pointStrokeColor    : 'rgba(60,141,188,1)',
                    pointHighlightFill  : '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data                : [2800, 4800, 4000, 1900, 8600, 2700, 9000]
                    },
                    {
                    label               : '2020',
                    backgroundColor     : 'rgba(210, 214, 222, 1)',
                    borderColor         : 'rgba(210, 214, 222, 1)',
                    pointRadius         : false,
                    pointColor          : 'rgba(210, 214, 222, 1)',
                    pointStrokeColor    : '#c1c7d1',
                    pointHighlightFill  : '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data                : [6500, 5900, 8000, 8100, 5600, 5500, 4000]
                    },
                ]
            }

            var areaChartOptions = {
                maintainAspectRatio : false,
                responsive : true,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                    gridLines : {
                        display : false,
                    }
                    }],
                    yAxes: [{
                    gridLines : {
                        display : false,
                    }
                    }]
                }
            }

            // This will get the first returned node in the jQuery collection.
            // new Chart(areaChartCanvas, {
            // type: 'line',
            // data: areaChartData,
            // options: areaChartOptions
            // })


            //-------------
            //- LINE CHART -
            //--------------
            var lineChartCanvas = this.$refs.lineChart.getContext('2d')
            // var lineChartOptions = $.extend(true, {}, areaChartOptions)
            // var lineChartData = $.extend(true, {}, areaChartData)
            // lineChartData.datasets[0].fill = false;
            // lineChartData.datasets[1].fill = true;
            // lineChartOptions.datasetFill = false

            new Chart(lineChartCanvas, {
                type: 'line',
                data: areaChartData,
                options: areaChartOptions
            })

            //-------------
            //- DONUT CHART -
            //-------------
            // Get context with jQuery - using jQuery's .get() method.
            var donutChartCanvas = this.$refs.donutChart.getContext('2d')

            var donutData        = {
            labels: [
                'Alcohol',
                'Drinks',
                'Food',
                'Snacks',
            ],
            datasets: [
                {
                data: [1800,200,400,600],
                backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef'],
                }
            ]
            }
            var donutOptions     = {
            maintainAspectRatio : false,
            responsive : true,
            }
            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            new Chart(donutChartCanvas, {
            type: 'doughnut',
            data: donutData,
            options: donutOptions
            })



            //-------------
            //- BAR CHART -
            //-------------
            var barChartCanvas = this.$refs.barChart.getContext('2d')

            var barChartData = areaChartData
            var temp0 = areaChartData.datasets[0]
            var temp1 = areaChartData.datasets[1]
            barChartData.datasets[0] = temp1
            barChartData.datasets[1] = temp0

            var barChartOptions = {
            responsive              : true,
            maintainAspectRatio     : false,
            datasetFill             : false
            }

            new Chart(barChartCanvas, {
            type: 'bar',
            data: barChartData,
            options: barChartOptions
            })

            //---------------------
            //- STACKED BAR CHART -
            //---------------------
            var stackedBarChartCanvas = this.$refs.stackedBarChart.getContext('2d')

            var stackedBarChartData = barChartData

            var stackedBarChartOptions = {
                responsive              : true,
                maintainAspectRatio     : false,
                scales: {
                    xAxes: [{
                    stacked: true,
                    }],
                    yAxes: [{
                    stacked: true
                    }]
                }
            }

            new Chart(stackedBarChartCanvas, {
                type: 'bar',
                data: stackedBarChartData,
                options: stackedBarChartOptions
            })
        }
    }
}
</script>
