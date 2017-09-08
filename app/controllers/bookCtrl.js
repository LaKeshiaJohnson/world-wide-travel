"use strict";
console.log("Book controller!");

app.controller("BookCtrl", function($scope, BookFactory) {
	BookFactory.getBooks()
	.then(function(itemCollection) {
		$scope.guides = itemCollection;
		console.log("Guides", $scope.guides);
	});
});