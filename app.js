// var app = angular.module("root")
var app = angular.module("root",[])
.controller('app', ['$scope','$window',function ($scope,$window) {
  $scope.greet =[
    'Hello'	
    ,'Zdraveĭte'
    ,'Nǐn hǎo'
    ,'Goede dag'
    ,'Bonjour'
    ,'Dia dhuit'
    ,'Guten tag'
    ,'Kalimera'
    ,'Shalom'
    ,'Asalaam alaikum'
    ,'Shalom aleichem'
    ,'Namastē'
    ,'Góðan dag'
    ,'Selamat siang'
    ,'Salve'
    ,'_Yō	Konnichiwa'
    ,'Suostei'
    ,'Anyoung'	
    ,'Anyoung haseyo'
    ,'Cześć'
    ,'Dzień dobry!'
    ,'Olá'
    ,'Bună ziua'
    ,'Zdravstvuyte'
    ,'Hola'
    ,'Habari'
    ,'God dag'
    ,'Ia ora na'
    ,'Merhaba'
    ,'Xin chào'
    ,'Shwmae',
    'Ngiyakwemukela']
    $scope.hours =0
    $scope.portfolio=false
$scope.projects=[
  {id:0,project_name:"VEKTA",project_images:[
    'vekta1.jpg' ,'vekta2.jpg' ,'vekta3.jpg',
  ],tech:['CodeIgniter','ReactJs'],link_name:'',link:null,description:''},
  {id:1,project_name:"OVCMIS",project_images:[
    'ovcmis1.jpg' ,'ovcmis2.jpg' ,'ovcmis3.jpg',
  ],tech:['CodeIgniter','AngularJs'],link_name:'',link:null,description:' '},
  {id:2,project_name:"SMITH CRAFT TECH",project_images:[
    'smith1.jpg' ,'smith2.jpg' ,'smith3.jpg',
  ],tech:['Bootstrap','JQuery'],link_name:'',link:null,description:' '},
  {id:3,project_name:"WOMBO RESTAURANT",project_images:[
    'wombo1.jpg' ,'wombo2.jpg' ,'wombo3.jpg',
  ],tech:['Boostrap','AngularJs','CodeIgniter'],link_name:'Wombo Restaurant',link:'https://www.womborestaurant.com',description:' '},
  {id:4,project_name:"YARID",project_images:[
    'yarid1.jpg' ,'yarid2.jpg' ,'yarid3.jpg',
  ],tech:['joomla'],link_name:'Young African Refugees for Integral Development',link:'https://www.yarid.org',description:' '},
  {id:5,project_name:"YSU",project_images:[
    'ysu1.jpg' ,'ysu2.jpg' ,'ysu3.jpg',
  ],tech:['Boostrap','PHP'],link_name:'Youth Sport Uganda',link:'https://youthsportuganda.org',description:' '},
  {id:6,project_name:"E-STOCK",project_images:[
    'estock2.jpg' ,'estock1.jpg' ,'estock3.jpg',
  ],tech:['MDBoostrap','PHP','JQuery'],link_name:'',link:null,description:' '},
  // {id:7,project_name:"E-ATTENDANCE",project_images:[
  //   'eAttandance1.jpg' ,'eAttandance2.jpg' ,
  // ],tech:['ReactNative','CodeIgniter'],link_name:'',link:null,description:' '},
 
]

//send email
$scope.usr_name=""
$scope.usr_email=""
$scope.usr_subject=""
$scope.usr_msg=""
$scope.usr_valid=0

$scope.sendEmail =()=>{
  if($scope.usr_valid>95){
      Email.send({
          SecureToken:"468e02f8-48c5-4b94-8850-46129cd0288b",
          To : ['xavio.wallace@hotmail.com'],
          From : $scope.usr_email,
          Subject : $scope.usr_subject,
          Body : $scope.usr_msg+" Sent by:" +$scope.usr_name
      }).then(
        message =>{
            if(message=="OK"){
              $.notify({
                // options
                message: "Email sent successfully"
              },{
                // settings
                type: 'success'
              });
            }else{
              $.notify({
                // options
                message: "Email sending failed"
              },{
                // settings
                type: 'danger'
              });
            }
        }
      );
  }else{
    $.notify({
      // options
      message: "Please valid that your not a robot"
    },{
      // settings
      type: 'danger'
    });
  }
}
$scope.data ={}

    
   let today= new Date().getTime();
   let d2 = new Date(2019,1,7).getTime(); 
//  console.log(d2,today)
    function daysDiff(d1, d2) {
      let secDiff = Math.floor( ( d2 - d1) / 1000 );
      let minutesDiff = Math.floor((secDiff / 60)/24);
      $scope.hours =minutesDiff
      return minutesDiff;
 } 
  $scope.handleViewPort=(project_id)=> {
    $scope.portfolio=true
 $scope.data =$scope.projects.filter(obj=>obj.id==project_id)[0]
 }
  $scope.handleProjSwitch=(tabSwitch,project_id)=> {
    let firstProj =0
    let lastProj =$scope.projects.length -1
    console.log(firstProj,lastProj,project_id)
    if(project_id != lastProj && tabSwitch==="next"){
      $scope.handleViewPort(parseInt(project_id)+1)
    }
    else if(project_id != firstProj && tabSwitch==="previous"){
      project_id-1
      $scope.handleViewPort(parseInt(project_id)-1)
    }
    else{
      $scope.handleViewPort(project_id)
    }
 }
 $scope.handleClosePort =()=>{
  $scope.portfolio=false
 }
 
 daysDiff(d2,today)

//  form spree
$window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

  }])
  
 

  // .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
  //   $locationProvider.html5Mode(true)
  //   $routeProvider
  //   .when("/portfolio_details/:id", {
  //     templateUrl : "./portfolio.html",
  //     controller:'port_details'
  //   })
  //   .otherwise({redirectTo:'/'})
  // }])
