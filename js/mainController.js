angular.module('mainApp')
          .controller('counterController', ['$scope', function ($scope) {
              $scope.CounterRows = [
                { name: 'Yahoo', website: 'www.yahoo.com' },
                { name: 'Lycos', website: 'www.lycos.com' },
                { name: 'Twitter', website: 'www.twitter.com' },
                { name: 'Youtube', website: 'www.youtube.com' },
                { name: 'Google', website: 'www.google.com' }];
              $scope.add = function add(){
                $scope.CounterRows.push({name:$scope.ind,web:'www.blank.com'});
                $scope.ind='';
              }
              $scope.remove = function remove(){
                $scope.CounterRows.splice($scope.ind2-1,1);
                $scope.ind2='';
              }
          }]);