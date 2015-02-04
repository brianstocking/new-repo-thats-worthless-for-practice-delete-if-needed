var app = angular.module('friends');

app.service('friendService', function(){
  var friends = ['Ean', 'Jess', 'Dan'];

  this.addNewFriend = function(friend){
    friends.push(friend);
  };

  this.getFriends = function(){
    return friends;
  };
});