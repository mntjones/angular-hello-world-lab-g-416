function MainController ($scope) {
  $scope.name = "Monica";
  $scope.occupation = "Engineer";
}

angular
  .module("app")
  .controller("MainController", MainController);