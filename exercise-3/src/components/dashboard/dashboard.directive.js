(function () {

    'use strict';

    angular.module('app.dashboard')
        .directive('tmplDashboard', directiveFunction)
        .controller('DashboardController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/dashboard/dashboard.html',
            scope: {
            },
            controller: 'DashboardController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['userService','logger', '$scope','$state','$stateParams'];

    /* @ngInject */
    function ControllerFunction(userService, logger, $scope, $state, $stateParams) {
        var vm = this;
        vm.users = [];
        vm.showUserDetail = showUserDetail;

        activate();

        function activate() {
            getUsers();
        }

        /*event handler to naviagte to user detail page */
        function showUserDetail(userID, $event) {
            $state.go('userDetails', {userID : userID});
        }

        //service call to fetch users
        function getUsers() {
            return userService.getUsers().then(function (data) {
              vm.users = data;
              return vm.users;
            })
        }

    }

})();
