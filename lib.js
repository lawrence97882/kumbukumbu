
///<reference path="angular.js"/>
var app=angular.module('kumbukumbu', ["ngRoute"])
        .controller("ob", function($scope){
            $scope.obituaries=
            [
                {
                  "picture":"sky.jpg",
                  "what":"name1 name2 name3",
                  "where":"Kiserian Kajiado county",
                  "when":"14th Jan 2017"
                },
                {
                  "picture":"1.jpg",
                  "what":"name1 name2 name3",
                  "where":"ngong Kajiado county",
                  "when":"17th Jan 2017"
                },
                {
                  "picture":"23.png",
                  "what":"jina1 jina2 jina3",
                  "where":"Kisaju Kajiado county",
                  "when":"14th Jan 2017"
                },
                {
                  "picture":"34.jpg",
                  "what":"name1 name2 name3",
                  "where":"Kiserian Kajiado county",
                  "when":"14th Jan 2017"
                }
              ];
        });
  //
  /** configuring the various pages in kumbukumbu */
app.config(function($routeProvider) {
    console.log($routeProvider.when());
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/wedding", {
        templateUrl : "wedding.htm"
    })
    .when("/obituary", {
        templateUrl : "ob.htm"
    })
    .when("/launch", {
        templateUrl : "lauch.htm"
    }).when("/contact", {
      templateUrl : "contact.htm"
    }).when("/about", {
      templateUrl : "about.htm"
  });
});