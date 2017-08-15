(function () {
    'use strict';

    angular
        .module('app.navigation')
        .directive('tmplNavigation', directiveFunction)
        .controller('NavigationController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/navigation/navigation.html',
            scope: {
            },
            controller: 'NavigationController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = [];

    /* @ngInject */
    function ControllerFunction() {
        var vm = this;
    }

})();
