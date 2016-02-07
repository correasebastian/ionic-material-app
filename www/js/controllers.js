/*
 * Controllers module is set 
 * @dep : null
 * */
angular.module('kids.controllers',['ionic'])

/*
 * Controller Drawer
 * @delegates : $scope
 * @array : homeList
 * @methods : null
 * 
 * */
.controller('drawerController', function($scope) {
    
    $scope.closeMenu=function(){
        $scope.closeDrawer();
    };

    $scope.homeList = [
        { title:'HOME', state:'home' , icon:'icon ion-ios-paw' },
        { title: 'SHARE', state:'alphabets' , icon:'icon fa fa-paper-plane fa-fw' },
        { title: 'ABOUT', state:'numbers' , icon:'icon fa fa-user fa-fw'},
        {title:'SETTINGS',state:'profile',icon:'icon ion-settings'},
        {title:'RATE',state:'profile',icon:'icon ion-ios-star'}
    ];

})


.controller('HomeController',function($scope,$ionicModal,$ionicPopover,$ionicSlideBoxDelegate,$timeout,$document,$state){
    
    $scope.showMainFab=false;
    $scope.$on('$ionicView.enter', function(){  //Event on view Enter 
            $scope.showMainFab=true;      //show Main FAB button
    });
    
    $scope.settingsPage=function(){        //navigate to Settings Page 
        $state.go('app.settings',null);
    };
    
    $scope.showMiniButton=false;
    
    
    $scope.showMini=function(){
        
        
        $scope.showMiniButton=!$scope.showMiniButton;
        $scope.tooltip1=false;
        $scope.tooltip2=false;
        $scope.tooltip3=false;
        $scope.tooltip4=false;
        
        $timeout(function() {
          $scope.tooltip4=true;
        }, 2500);
        
        $timeout(function() {
          $scope.tooltip3=true;
        }, 2800);
        
        $timeout(function() {
          $scope.tooltip2=true;
        }, 3100);
        
        $timeout(function() {
          $scope.tooltip1=true;
        }, 3400);
    };
    
    
    
/*data inserted to Modal*/
$scope.alphabetsItems = [
    [
      {name:'Apple',img:'apple.svg'},
      {name:'Accentor',img:'cat.svg'},
      {name:'Abasers',img:''}
    ],[
       {name:'Bccentor',img:'bat.svg'},
       {name:'Basers',img:'elephant.svg'},
       {name:'B3',img:'elephant.svg'}
    ],[
       {name:'Ccentor',img:'hippo.svg'},
       {name:'Casers',img:'frog.svg'},
       {name:'C3',img:'frog.svg'}
    ],[
       {name:'D1',img:'hippo.svg'},
       {name:'D2',img:'frog.svg'},
       {name:'d3',img:'frog.svg'}
    ]
  ];

    
/*Reference Array*/
    $scope.cards = [];
  
/*Original Array*/
    $scope.itemCards=[
{title:'Pet',idx:0, bcolor:'redBg',fcolor:'redFt',tcolor:'cardTitleColorWhite',progressOutColor:'redFt',progressInColor:'progressBarColorWhite',img:'apple.svg',width:'col-50'},   
        {title:'Farm',idx:1,bcolor:'greenBg',fcolor:'greenFt',tcolor:'cardTitleColorBlack',progressOutColor:'greenFt',progressInColor:'progressBarColorBlack',img:'bat.svg',width:'col-50'},
        {title:'Jungle',idx:2,bcolor:'yellowBg',fcolor:'yellowFt',tcolor:'cardTitleColorBlack',progressOutColor:'yellowFt',progressInColor:'progressBarColorBlack',img:'cat.svg',width:'col-100'},
        
{title:'Sea',idx:3, bcolor:'violetBg',fcolor:'violetFt',tcolor:'cardTitleColorWhite',progressOutColor:'violetFt',progressInColor:'progressBarColorWhite',img:'dog.svg',width:'col-50'},
        
{title:'Forest',idx:4, bcolor:'orangeBg',fcolor:'orangeFt',tcolor:'cardTitleColorBlack',progressOutColor:'orangeFt',progressInColor:'progressBarColorBlack',img:'elephant.svg',width:'col-50'},

{title:'Birds',idx:5, bcolor:'purpleBg',fcolor:'purpleFt',tcolor:'cardTitleColorWhite',progressOutColor:'purpleFt',progressInColor:'progressBarColorWhite',img:'frog.svg',width:'col-100'},

{title:'Ice',idx:6, bcolor:'cyanBg',fcolor:'cyanFt',tcolor:'cardTitleColorBlack',progressOutColor:'cyanFt',progressInColor:'progressBarColorBlack',img:'hippo.svg',width:'col-100'},
        
{title:'Insects',idx:7, bcolor:'limeBg',fcolor:'limeFt',tcolor:'cardTitleColorBlack',progressOutColor:'limeFt',progressInColor:'progressBarColorBlack',img:'hippo.svg',width:'col-50'},
        
{title:'Mountain',idx:8, bcolor:'pinkBg',fcolor:'pinkFt',tcolor:'cardTitleColorWhite',progressOutColor:'pinkFt',progressInColor:'progressBarColorWhite',img:'hippo.svg',width:'col-50'}
    ];
    
   for (var i=0; i< $scope.itemCards.length; i++) {
    $timeout(function(){
      $scope.cards.push('');
    }, i*300);
  }


    $ionicModal.fromTemplateUrl('partials/animalsModal.html', {
        scope: $scope,
        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
        
        $scope.slideChanged = function(index) {
            $scope.showPlay=false; /*fab hide*/
            $timeout(function() {
                 $scope.showPlay=true; /*fab show*/
            },5);
            $scope.title = $scope.alphabetsItems[$scope.current||0][index].name;
            var slides = $ionicSlideBoxDelegate.slidesCount();
            var increment = $document[0].getElementsByClassName('increment');
            increment[0].style.width = (1+19*index/(slides-1))*5+'%'; 
            $ionicSlideBoxDelegate.update();
        };
        
    });
    
    $scope.showPlay=false;         /*fab show*/

    $scope.openModal = function(index,bcolor,fcolor,tcolor,progressOutColor,progressInColor) {
        $scope.current = index;     /*current slide index*/
        $scope.bkColor=bcolor;
        $scope.ftColor=fcolor;
        $scope.tColor= tcolor;
        $scope.pOutColor=progressOutColor;
        $scope.pInColor=progressInColor;
        $scope.title = $scope.alphabetsItems[$scope.current][0].name;
        $scope.modal.show();
    };
            
    $scope.closeModal = function() {
        $scope.modal.hide();
        $timeout(function() {
            $scope.showPlay=false; /*fab hide*/
        },10);
    };
    
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next(); 
    }
    
    $scope.previousSlide=function(){
        $ionicSlideBoxDelegate.previous();
    }
    
    // Execute action on hide shown
    $scope.$on('modal.shown', function() {
        $scope.showPlay=true;       /*fab show*/
    });    
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      $ionicSlideBoxDelegate.slide(0);
      $scope.showPlay=false;      /*fab hide*/
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
    
    $timeout(function() {
        $ionicSlideBoxDelegate.update();
    },50); 
    
    $ionicPopover.fromTemplateUrl('partials/popover.html', {
            scope: $scope,
        }).then(function(popover) {
            $scope.popover = popover;
        }); 
})



//Settings Page Controller

.controller('SettingsController',function($scope){
    
    $scope.hello=function(){
       /* console.log("works");*/
    };

    $scope.yey="Banana";
    
    $scope.showProceed=false;
    $scope.$on('$ionicView.enter', function(){  //Event on view Enter 
            $scope.showProceed=true;      //show Proceed button
    });
})








