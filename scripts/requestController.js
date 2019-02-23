var myApp=angular.module("onlinevoucher",[]);
myApp.controller('theController',function($scope,$window,$http,$location){

  $scope.message='';
  $scope.records = [];

$scope.requestertName ='';  
    
$scope.emailAddress ='';  

$scope.customerfirstName =''; 
        
$scope.customerEmailAddress =''; 

$scope.eventDateLocation ='';  
$scope.quantity ='';
$scope.voucherTyper ='';  
$scope.discountEconoy ='';
$scope.discountBusiness =''; 
$scope.puchaseForm =''; 
$scope.purchaseTo =''; 
$scope.outboundTravelFrom ='';
$scope.outboundTravelTo =''; 
$scope.inbountTravelForm =''; 
$scope.inboundTravelTo ='';
$scope.airportFrom ='';
$scope.airportTo =''; 
$scope.restrictionByFareFamily=''; 
$scope.passengerType =''; 
$scope.justification     ='';
$scope.sendTo='';  



  $scope.someUrl ="http://52.196.132.3:9090/submitForm"
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  //$scope.someUrl ="http://localhost:9090/submitForm"
  
  $scope.submitForm=function(){


    var requestertName=$scope.requestertName;
    var customerfirstName=$scope.customerfirstName
    
    var emailaddress=$scope.emailAddress;
    var customerEmailAddress=$scope.customerEmailAddress
    var eventDateLocation=$scope.eventDateLocation;
    var quantity=$scope.quantity;
    var voucherTyper=$scope.voucherTyper;
    var discountEconoy=0
    var discountBusiness=0
    var puchaseForm=$scope.puchaseForm
    var purchaseTo=$scope.purchaseTo;
    var outboundTravelFrom=$scope.outboundTravelFrom
    var outboundTravelTo=$scope.outboundTravelTo
    var inbountTravelForm=$scope.inbountTravelForm
    var inboundTravelTo=$scope.inboundTravelTo
    var airportFrom=$scope.airportFrom
    var airportTo=$scope.airportTo
    var restrictionByFareFamily=$scope.restrictionByFareFamily;
    var passengerType=$scope.passengerType
    var justification=$scope.justification
    var sendTo=$scope.sendTo;
    var customer={
      "firstName": customerfirstName,
     
      "emailAddress":  customerEmailAddress,
    }

    var requester={
        "firstName": requestertName,
       
        "emailAddress":  emailaddress,
      }

      var data ={
          "customer":customer,
          "requester":requester,
          "eventDateLocation":eventDateLocation,
          "quantity":quantity,
        "voucherTyper":voucherTyper,
        "discountEconoy":discountEconoy,
        "discountBusiness":discountBusiness,
        "puchaseForm":puchaseForm,
        "purchaseTo":purchaseTo,

        "outboundTravelFrom":outboundTravelFrom,
        "outboundTravelTo":outboundTravelTo,
        "inbountTravelForm":inbountTravelForm,
        "inboundTravelTo":inboundTravelTo,
        "airportFrom":airportFrom,
        "airportTo":airportTo,
        "restrictionByFareFamily":restrictionByFareFamily,
        "passengerType":passengerType,
        "justification":justification,
        "sendTo":sendTo
      }

    console.log("data :"+JSON.stringify(data));


  $http.post(proxyurl+$scope.someUrl, data).then(function(response){
     if(response.data.responseCode=="00"){
      $scope.message="Form Submited Successfully!";
      console.log("data :"+JSON.stringify("formID: "+response.data));

     }
  },function(){
    $scope.message="Registration  Failed";
    console.log("failed");
  });

}


$scope.getForms=function(){
  someUrl ="http://52.196.132.3:9090/viewForm/zaheeru7@gmail.com"

     

  $http.get(proxyurl+someUrl).then(function(responce){
    console.log(responce.data);
    for(var i=0;i<responce.data.form.length;i++){
    $scope.records.push(responce.data.form[i]);
    
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

$scope.resubmit=function(formID){
  console.log("data :"+JSON.stringify("formID: "+formID));

someUrl ="http://52.196.132.3:9090/resubmitForm/"+formID
const proxyurl = "https://cors-anywhere.herokuapp.com/";

  $http.get(proxyurl+someUrl).then(function(response){
    if(response.data.responseCode=="00"){
      $scope.message="Form Resubmited Successfully!";

     }
    },function(){
      $scope.message="Registration  Failed";
      console.log("failed");
    });
  

}


$scope.addNewRequest=function(){
  console.log("data here:");

  $window.location.href = './requestForm.html'
}

$scope.backToMainPage=function(){
  console.log("data here:");

  $window.location.href = './requesterMainPage.html'
}
});
