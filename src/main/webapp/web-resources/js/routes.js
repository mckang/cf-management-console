/**
 *  route.js
 **/
define(['app'], function (app) {
	return app.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', 
		function($stateProvider, $routeProvider, $urlRouterProvider) {
		console.log('routes.js - called', app);
		
		var navigation = {
			templateUrl: 'partials/navigation.html',
			controller: 'navigationController'
		};

		$stateProvider.state('app-log', {
			url: '/app-log/:organizationId/:applicationId/:instanceId/:fileName',
			views: {
				'navigation': navigation,		
				'body': {
					templateUrl: 'partials/app-log.html',
					controller: 'appLogController'
				}
			}
		}).state('app-settings', {
			url: '/app-settings/:organizationId/:applicationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/app-settings.html',
					controller: 'appSettingsController'
				}
			}
		}).state('app-spaces', {
			url: '/app-spaces/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/app-spaces.html',
					controller: 'appSpacesController'
				}
			}
		}).state('create-org', {
			url: '/create-org/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/create-org.html',
					controller: 'organizationController'
				}
			}
		}).state('create-space', {
			url: '/create-space/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/create-space.html',
					controller: 'spaceController'
				}
			}
		}).state('marketplace', {
			url: '/marketplace/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/marketplace.html',
					controller: 'marketplaceController'
				}
			}
		}).state('org-settings', {
			url: '/org-settings/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/org-settings.html',
					controller: 'organizationController'
				}
			}
		}).state('space-settings', {
			url: '/space-settings/:organizationId/:spaceId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/space-settings.html',
					controller: 'spaceController'
				}
			}
		}).state('newUsers', {
			url: '/organization/:organizationId/users',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/org-users.html',
					controller: 'organisationUsersController'
				}
			}
		}).state('users', {
			url: '/users/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/users.html',
					controller: 'usersController'
				}
			}
		}).state('userinfo', {
			url: '/userinfo/:organizationId',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/user-info.html',
					controller: 'userInfoController'
				}
			}
		}).state('login', {
			url: '/login',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/login.html',
					controller: 'loginController'
				}
			}
		}).state('register', {
			url: '/register',
			views: {
				'navigation': navigation,
				'body': {
					templateUrl: 'partials/register.html',
					controller: 'registerController'
				}
			}
		});
	}]);
});
