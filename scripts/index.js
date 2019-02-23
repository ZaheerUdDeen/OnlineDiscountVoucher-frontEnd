var myApp=angular.module("onlinevoucher",[]);
myApp.controller('theController',function($scope,$window,$http,$location){



 
  $scope.loginAsAdmin=function(){
    console.log("data here:");

    $window.location.href = './adminLoginForm.html'
    }

    $scope.loginAsRequester=function(){
      console.log("data here:");

      $window.location.href = './requesterLoginForm.html'
    }

});
