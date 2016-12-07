angular.module('product-directives', []);

angular.module('product-directives').directive('productDetails', function(){
    return {
         restrict: 'E',
        templateUrl: '/templates/productDetails.html'
    }
});


angular.module('product-directives').directive('panels', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/panels.html',
        controller: function($scope){
   $scope.tab = 1;

   $scope.selectTab = function(setTab){
     $scope.tab = setTab;
   }
   
   $scope.isSelected = function(currentTab){
       return $scope.tab === currentTab;
   }
    }
    }
});

angular.module('product-directives').directive('reviews',function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/reviews.html',
        controller: function($scope){
            $scope.review = {stars: "5"};
    
            $scope.addReview = function(product){
                if(!product.reviews)
                    product.reviews = [];
                product.reviews.push($scope.review);
                //TODO: USE APIS to push reviews to database
                $scope.review = {
                    stars:  '5'
                };
                return false;
            }
        }
    }
});
