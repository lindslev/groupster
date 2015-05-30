/* browser-action script */

angular.module('groupster', [])
  .controller('HomeCtrl', function ($http, $scope, $timeout) {
  	$scope.servers = ['Radius', 'Segment', 'Pi', 'Origin', 'Sphere', 'Centra', 'Arc', 'Orbit', 'Chord', 'Diameter']
  	$scope.makeGroupOn = function(server) {
  		$http.get('http://serene-headland-9709.herokuapp.com/groupster/' + server.toLowerCase())
  			.success(function(link) {
  				var grouplink = 'http://tagpro-' + server.toLowerCase() + '.koalabeast.com/groups/' + link;
  				window.open(grouplink);
  			})
  			.error(function(err) {
  				console.log(err);
  			})
  	}
  });