// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('FileTransferController', function($scope, $cordovaFileTransfer) {

  $scope.testFileDownload = function () {
    // File for download (photo OR video)
    // var url = "http://www.gajotres.net/wp-content/uploads/2015/04/logo_radni.png";
    var url = "https://scontent.cdninstagram.com/t50.2886-16/11769924_1164328446927429_537155619_n.mp4";
    alert(url);

    // File name only
    var filename = url.split("/").pop();
    alert(filename);
     
    // Save location
    var targetPath = cordova.file.externalRootDirectory + filename;
    alert(targetPath);

    alert("Downloading...");
     
    $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
        alert('Success!');
    }, function (error) {
        alert('Error!');
    }, function (progress) {
        // PROGRESS HANDLING GOES HERE
    });
  };

});
