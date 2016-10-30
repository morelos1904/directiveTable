angular.module('app')
  .directive('modelsTable', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/Directives/Views/models-table.html',
      link: function(scope, element, attrs) {
        scope.models = scope.$eval(attrs.models);
        scope.columns = attrs.columns.split(",");
      }
    };
  });