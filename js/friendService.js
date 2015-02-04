var app = angular.module('friends');

app.service('friendService', function(){
  var friends = ['Ean', 'Jess', 'Dan'];

  this.addNewFriend = function(friend){
    friends.push(friend);
  };

  this.getFriends = function(){
    return friends;
  };
  
  
  this.removeFriend = function(friend){
    var index = friends.indexOf(friend);
    if(index !== -1){
      
      friends.splice(index, 1);
    }
    
    
  };
  
  this.clearFriends = function(){
    friends.splice(0,friends.length);
  }
});