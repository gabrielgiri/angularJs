angular.module("MyFirstApp",[])
    .controller("FirstController", function($scope, $http){
        $scope.users = [];
        $scope.newUser = [];

        $http.get("http://jsonplaceholder.typicode.com/users")

            .success(function(data){             
                $scope.users = data;
                console.log(data);
                })
                 
            .error(function(error){

            });

            $scope.addUser = function(){
                
                 $http.post("http://jsonplaceholder.typicode.com/users",{
                     title: $scope.newUser.name,
                     title: $scope.newUser.email
                })
                 .success(function(data, status, headers, config){
                    $scope.users.push($scope.newUser);
                    $scope.addUser={};
                 })

                 .error(function(error, status, headers, config){
                     console.log(error);
                 });
             }
    }); 