

var myApp = angular.module("myApp", ['product-directives']);


// adding my controller to my app
  angular.module("myApp").controller("myController", ['$http', '$log', '$scope',function($http, $log, $scope ){
   $http.get('/data/product.json').success(function(data){
             $scope.model = data;
    });                                                   
//  $scope.name = "Joe";
//  $scope.model = gem;
}]);


// adding a directive
angular.module("myApp").directive("myExample", function(){
  return {
    template: "<div>This is my custom directive</div>"
  }
});

