angular.module("MyFirstApp",[])
    .controller("FirstController", function($scope, $http){
        $scope.users = [];

        $http.get("http://jsonplaceholder.typicode.com/users")

            .success(function(data){
                             
                $scope.users = data;
                console.log(data);

            })
            .error(function(error){

            });

            $scope.addPost = function(){
                $http.post("http://jsonplaceholder.typicode.com/users")
                .success(function(data, status, headers, config){
                    
                })

                .error(function(error, status, headers, config){
                    console.log(error);
                };
            }
    }); 