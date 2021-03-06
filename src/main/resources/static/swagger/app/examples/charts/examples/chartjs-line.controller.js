(function () {
    'use strict';

    angular
        .module('app.examples.charts')
        .controller('ChartJsLineController', ChartJsLineController);

    /* @ngInject */
    function ChartJsLineController($interval) {
        var vm = this;
        vm.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        vm.series = ['Series A', 'Series B', 'Series C'];
        vm.options = {
            datasetFill: false
        };

        ///////////

        function randomData() {
            vm.data = [];
            for (var series = 0; series < vm.series.length; series++) {
                var row = [];
                for (var label = 0; label < vm.labels.length; label++) {
                    row.push(Math.floor((Math.random() * 100) + 1));
                }
                vm.data.push(row);
            }
        }

        // init

        randomData();

        // Simulate async data update
        $interval(randomData, 5000);
    }
})();