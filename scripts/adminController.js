var myApp=angular.module("onlinevoucher",[]);
myApp.controller('theController',function($scope,$window,$http,$location){

  $scope.message='' ;
    $scope.records = [];
    $scope.recordsNextPage = {};

  $scope.someUrl ="http://52.196.132.3:9090/getForm"
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  
  $scope.getForms=function(){
    

     

  $http.get(proxyurl+$scope.someUrl).then(function(responce){
    console.log(responce.data.length);
    for(var i=0;i<responce.data.length;i++){
    $scope.records.push(responce.data[i]);
    
    }
  },function(){
    $scope.message="Registration  Failed";
    console.log("failed");
  });

  

}
$scope.setForm=function(data){
    $scope.recordsNextPage=data;
    console.log("data :"+JSON.stringify(data));

}

$scope.setProvalStatus=function(formID,aprovalStatus){
    console.log("data :"+JSON.stringify("formID: "+formID));
    console.log("data :"+JSON.stringify("aprovalStatus: "+aprovalStatus));

  someUrl ="http://52.196.132.3:9090/aproveRequest/"+formID+"/"+aprovalStatus
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

    $http.get(proxyurl+someUrl).then(function(response){
        if(response.data.responseCode=="00"){
          console.log("data :"+JSON.stringify(response.data));

          $scope.message="Form "+aprovalStatus+" Successfully";
    
         }
        
      },function(){
        $scope.message="Registration  Failed";
        console.log("failed");
      });
    

}

});
