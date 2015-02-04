var app = angular.module('friends');

app.controller('mainCtrl', function($scope, friendService){
  $scope.friends = friendService.getFriends();

  $scope.addFriend = function(){
    friendService.addNewFriend($scope.newFriend);
    $scope.newFriend ='';
  };
  
  $scope.removeFriend = function(){
    friendService.removeFriend($scope.oldFriend);
        $scope.oldFriend ='';

    
  }
  
  $scope.clearFriends = function(){
    friendService.clearFriends($scope. allFriends)
    
  }
});