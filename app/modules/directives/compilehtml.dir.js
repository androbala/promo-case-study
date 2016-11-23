angular.module('tgtApp').directive('compileHtml', function ($compile) {
  return function (scope, element, attrs) {
    scope.$watch(
      function(scope) {
        return scope.$eval(attrs.compileHtml);
      },
      function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      }
    );
  };
});