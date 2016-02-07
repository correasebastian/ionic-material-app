
angular.module('kids', ['ionic', 'kids.controllers','kids.directives','ionic.contrib.drawer','ngFx','ngMaterial'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        /*if(window.StatusBar) {
            StatusBar.styleDefault();
        }*/
    });
})

/*
 * configuration block 
 * states , url routing and views are defined
 * 
 * */
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "partials/menu.html",
        controller:'drawerController'
    })

   

    .state('app.home', {
        url: "/home",
        views: {
            'mainContent' :{
                templateUrl: "partials/home.html",
                controller: 'HomeController'
            }
        }
    })
    
    .state('app.settings', {
        url: "/settings",
        views: {
            'mainContent' :{
                templateUrl: "partials/settings.html",
                controller: 'SettingsController'
            }
        }
    })
    
     

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
