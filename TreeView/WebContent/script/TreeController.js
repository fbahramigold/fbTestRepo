var tree =[{name: 'Inventory Items', nodes: []},
           {name: 'Non Inventory Items', nodes: []},
           {name: 'Assembly Build Items', nodes: []},
           {name: 'Serialized Assembly Items', nodes: []}
           ];

var myApp = angular.module("myModule", []);

myApp.controller('dataController', function($scope, $http) {
	var intUrl = '/app/site/hosting/restlet.nl?script=96&deploy=1';
    $http({
        url: intUrl,
        dataType: "JSON",
        method: "POST",
        data: JSON.stringify([{"type":"item", "date":"myDate"},{"fName":"Frank"},{"lName":"Bahrami"}])
    }).success(function(response){
        $scope.empData = response;
        console.log('Success');
    }).error(function(error){
        $scope.error = error;
        console.log('Error');
        
    });
    console.log('');

});
		
myApp.controller("TreeController", ['$scope', function($scope) {
    $scope.remove = function(data) {
        data.nodes = [];
    };
    
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    
    $scope.tree = tree;
    

    console.log('Tree controller');
 //   loadItems();

}]);

/*
function loadItems(){

	var columns = [];
	columns.push(new nlobjSearchColumn('type'));
	columns.push(new nlobjSearchColumn('custitem_lsns_item_description'));
	
	
	var rscnt = 1000;
	var nextStartIndex = 0;
	var nextEndIndex = 1000;

	var newSearch = nlapiCreateSearch('item', null, columns);
	var searchResultSet = newSearch.runSearch();

	while (rscnt == 1000) {
	   var rs = searchResultSet.getResults(nextStartIndex, nextEndIndex);

	   for (var i=0; i < rs.length; i++) {
	        // go through each nlobjSearchResult object
		   var rType = rs[i].type;
		   var desc = rs[i].rawValues[1].value;
		   var des = rs[i].custitem_lsns_item_description;
	   }

	   rscnt = rs.length;
	   nextStartIndex = nextEndIndex;
	   nextEndIndex = nextEndIndex + 1000;
	}
}
 
*/