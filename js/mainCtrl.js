var app = angular.module('friends');

app.controller('mainCtrl', function($scope, friendService){
  $scope.friends = friendService.getFriends();

  $scope.addFriend = function(){
    friendService.addNewFriend($scope.newFriend);
  };
});