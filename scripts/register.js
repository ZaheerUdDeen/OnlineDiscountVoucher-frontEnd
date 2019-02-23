var myApp=angular.module("onlinevoucher",[]);
myApp.controller('theController',function($scope,$window,$http,$location){


  $scope.message='';

  $scope.firstName ='';  
  $scope.lastName ='';  
$scope.emailAddress ='';  
    
$scope.password ='';  





  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  //$scope.someUrl ="http://localhost:9090/submitForm"
  
  $scope.registerRequester=function(){
    var firstName=$scope.firstName
    var lastName=$scope.lastName;
    var emailAddress=$scope.emailAddress;
    var password=$scope.password
    var data={
      "firstName": firstName,
    "lastName": lastName,
    "emailAddress": emailAddress,
    "password":password
  }

    someUrl ="http://52.196.132.3:9090/addRequester"
    
  $http.post(proxyurl+someUrl,data).then(function(response){
    if(response.data.responseCode=="00"){
      if(response.data.responseCode=="00"){
        $scope.message="Registered Successfully!";
        console.log("data :"+JSON.stringify("formID: "+response.data));
  
       }
    }else{
      console.log("Longing failed:"+response.data.responseCode);

    }
  },function(){
    $scope.message="Registration Failed";
    console.log("failed");
  });

}
$scope.cancel=function(){
  console.log("data here:");

  $window.location.href = './index.html'
}
});
