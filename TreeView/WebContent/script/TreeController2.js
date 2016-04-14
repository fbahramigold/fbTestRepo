/**
 * Created by Amit Thakkar on 24/03/15.
 */

var app = angular.module("tree", ['tree.service', 'tree.directives']);
app.controller("TreeController", ["TreeService", function (TreeService) {
    var tc = this;
    buildTree();
    function buildTree() {
        TreeService.getTree().then(function (result) {
            tc.tree = result.data;
        }, function (result) {
            alert("Tree no available, Error: " + result);
        });
    }
}]);

//TreeController.jsvar angular.module("treeModule", [])

angular.module("myApp", []).controller("TreeController", ['$scope', function($scope) {
    $scope.remove = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [{name: "Node", nodes: []}];
}]);


/*
(function (ng) {
    var app = ng.module('tree', ['tree.service', 'tree.directives']);
    app.controller("TreeController", ["TreeService", function (TreeService) {
        var tc = this;
        buildTree();
        function buildTree() {
            TreeService.getTree().then(function (result) {
                tc.tree = result.data;
            }, function (result) {
                alert("Tree no available, Error: " + result);
            });
        }
    }]);
})(angular);
*/
