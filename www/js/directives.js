/*
 * directives module is set
 * @dep : null
 * */
angular.module('kids.directives', [])

/*shrinking header*/
.directive('headerShrink', function($document) {
  var fadeAmt;

  var shrink = function(header, content, amt, max) {
    amt = Math.min(44, amt);
    fadeAmt = 1 - amt / 44;
    ionic.requestAnimationFrame(function() {
      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
      for(var i = 0, j = header.children.length; i < j; i++) {
        header.children[i].style.opacity = fadeAmt;
      }
    });
  };

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var starty = $scope.$eval($attr.headerShrink) || 0;
      var shrinkAmt;
      
      var header = $document[0].body.querySelector('.bar-header');
      var headerHeight = header.offsetHeight;
      
      $element.bind('scroll', function(e) {
        var scrollTop = null;
        if(e.detail){
          scrollTop = e.detail.scrollTop;
        }else if(e.target){
          scrollTop = e.target.scrollTop;
        }
        if(scrollTop > starty){
          // Start shrinking
          shrinkAmt = headerHeight - Math.max(0, (starty + headerHeight) - scrollTop);
          shrink(header, $element[0], shrinkAmt, headerHeight);
        } else {
          shrink(header, $element[0], 0, headerHeight);
        }
      });
    }
  }
})

/*Floating label Inputs Material Design*/
.directive('ionMdInput', function(){
  return {
    restrict: 'E',
    transclude: true,
    template:
      '<input type="text" required>'+
      '<span class="md-highlight"></span>'+
      '<span class="md-bar"></span>'+
      '<label>{{label}}</label>',
    scope: {
      'label': '@'
    }
  }
})

/*shrinking floating action button*/
.directive('fab', function ($document, $rootScope, $timeout, $ionicScrollDelegate) {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attr) {
			var header = $document[0].body.querySelector('ion-header-bar, .bar-header');
      var headerHeight = header.offsetHeight;
      var cta = $document[0].body.querySelector('#fab');
      var updateCta = function(y) {
       ionic.requestAnimationFrame(function () {
          cta.style[ionic.CSS.TRANSFORM] = 'translate3d(0, ' + y + 'px, 0)';
        }); 
      }
      var shrinkAmt;
      var amt;
      var y = 0;
      var prevY = 0;
      var scrollDelay = 0.5;
      function onScroll(e) {
        var scrollTop = e.detail.scrollTop;
        console.log(scrollTop);
        if (scrollTop >= 0) {
          y = Math.min(headerHeight / scrollDelay, Math.max(0, y + scrollTop - prevY));
        } else {
          y = 0;
        }
        updateCta(y);
        prevY = scrollTop;
      }
      $element.bind('scroll', onScroll);
    }
  };
})

