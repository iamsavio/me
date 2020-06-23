// var app = angular.module("root")
var app = angular.module("root",[])
.controller('app', ['$scope',function ($scope) {
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
    'vekta1.png' ,'vekta2.png' ,'vekta3.png',
  ],tech:['CodeIgniter','ReactJs'],link_name:'',link:null,description:''},
  {id:1,project_name:"OVCMIS",project_images:[
    'ovcmis1.png' ,'ovcmis2.png' ,'ovcmis3.png',
  ],tech:['CodeIgniter','AngularJs'],link_name:'',link:null,description:' '},
  {id:2,project_name:"SMITH CRAFT TECH",project_images:[
    'smith1.png' ,'smith2.png' ,'smith3.png',
  ],tech:['Bootstrap','JQuery'],link_name:'',link:null,description:' '},
  {id:3,project_name:"WOMBO RESTAURANT",project_images:[
    'wombo1.png' ,'wombo2.png' ,'wombo3.png',
  ],tech:['Boostrap','AngularJs','CodeIgniter'],link_name:'Wombo Restaurant',link:'https://www.womborestaurant.com',description:' '},
  {id:4,project_name:"YARID",project_images:[
    'yarid1.png' ,'yarid2.png' ,'yarid3.png',
  ],tech:['joomla'],link_name:'Young African Refugees for Integral Development',link:'https://www.yarid.org',description:' '},
  {id:5,project_name:"YSU",project_images:[
    'ysu1.png' ,'ysu2.png' ,'ysu3.png',
  ],tech:['Boostrap','PHP'],link_name:'Youth Sport Uganda',link:'https://youthsportuganda.org',description:' '},
  {id:6,project_name:"E-STOCK",project_images:[
    'estock2.png' ,'estock1.png' ,'estock3.png',
  ],tech:['MDBoostrap','PHP','JQuery'],link_name:'',link:null,description:' '},
  // {id:7,project_name:"E-ATTENDANCE",project_images:[
  //   'eAttandance1.png' ,'eAttandance2.png' ,
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
