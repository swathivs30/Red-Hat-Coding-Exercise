(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('userService', userService);

	userService.$inject = ['$http', '$location', 'exception', 'api'];

	/* @ngInject */
	function userService($http, $location, exception, api) {
		var service = {
			getUsers: getUsers,
            getUserDetails: getUserDetails,
		};

		return service;

        /* fetch the list of users */
		function getUsers() {
			return $http.get('http://jsonplaceholder.typicode.com/users')
				.then(getUsersComplete)
				.catch(function(message) {
					exception.catcher('XHR Failed for getUsers')(message);
					$location.url('/');
				});

			function getUsersComplete(data) {
				return data.data;
			}
		}

        /* fetch the details of selected user using user ID*/
        function getUserDetails(userID) {
        var data = {
            'userID' : userID
        };
        return $http.get( 'http://jsonplaceholder.typicode.com/users/' + userID)
                    .then(userDetailsComplete)
                    .catch(userDetailsFailed);

        function userDetailsComplete(response) {
            return response.data;
        }

        function userDetailsFailed(error) {
            console.log('Failed to Get user details.' + error.data);
        }
    }
	}
})();
