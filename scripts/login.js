var myApp=angular.module("onlinevoucher",[]);
myApp.controller('theController',function($scope,$window,$http,$location){



$scope.emailAddress ='';  
    
$scope.password ='';  





  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  //$scope.someUrl ="http://localhost:9090/submitForm"
  
  $scope.adminLlogin=function(){
    var emailAddress=$scope.emailAddress;
    var password=$scope.password
    someUrl ="http://52.196.132.3:9090/loginAdmin"
    
  $http.post(proxyurl+someUrl+"/"+emailAddress+"/"+password).then(function(response){
    if(response.data.responseCode=="00"){
      $scope.message="Login  Successfully";
    
       $window.location.href = './admin.html'
    }else{
      console.log("Longing failed:"+response.data.responseCode);

    }
  },function(){
    $scope.message="Registration Failed";
    console.log("failed");
  });

}

$scope.requesterlogin=function(){
  var emailAddress=$scope.emailAddress;
  var password=$scope.password
  someUrl ="http://52.196.132.3:9090/loginRequester"
  
$http.get(proxyurl+someUrl+"/"+emailAddress+"/"+password).then(function(response){
  console.log(response.data);

  if(response.data.responseCode=="00"){
    console.log("success");
  
     $window.location.href = './requesterMainPage.html'
  }else{
    console.log("login failed");
  
  }
},function(){
  $scope.message="Registration Failed";
  console.log("failed");
});

}

$scope.loginAsRequester=function(){
  console.log("data here:");

  $window.location.href = './requesterLoginForm.html'
}

});
