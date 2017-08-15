(function () {
    'use strict';

    angular
        .module('app.userDetails')
        .directive('tmplUserdetails', directiveFunction)
        .controller('UserDetailsController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/userDetails/userDetails.html',
            scope: {
            },
            controller: 'UserDetailsController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['userService','logger', '$scope','$state','$stateParams'];

    /* @ngInject */
    function ControllerFunction(userService, logger, $scope, $state, $stateParams) {
        var vm = this;

        getUserDetails();

        /* service call to fetch user details */
        function getUserDetails() {
            var userID = $stateParams.userID;
            userService.getUserDetails(userID).then(function(data) {
                vm.userDetails = data;
            });
        }
    }
})();
