angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state' // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
  $scope.data = {
  	'email': '',
  	'password': ''
  }
  

  if($ionicAuth.isAuthenticated()){
  	$ionicUser.load().then(function(){});
  	$scope.success = 'Allready authenticated';
  }

  $scope.login = function(){
  	$scope.error ='';
  	$ionicAuth.login('basic', $scope.data)).then(function(){
        $scope.success = "It is all OK";
      },function(){
        $scope.error = "It is error";
      })
  }
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 