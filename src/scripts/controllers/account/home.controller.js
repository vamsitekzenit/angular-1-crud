'use strict';

(function () {

    function homeController($scope,userService) {

      var ctrl=this;

        $scope.savestudent = function(form){

            $scope.student={};

            $scope.student.passport={};

            $scope.student.passport.passportno=$scope.passportno;

            $scope.student.name=$scope.name;

            $scope.student.age=$scope.age;

            $scope.phones=[];

            $scope.phoneslist={};

            $scope.phoneslist.phonenumber=$scope.phonenumber;

            $scope.phones.push($scope.phoneslist);
            

            $scope.student.phone= $scope.phones;

            // $scope.student.qualification=[];

            // $scope.student.qualification.push($scope.qualification);

            // $scope.student.qualification=$scope.qualification;
            

            if(form.$valid){
                console.log($scope.student);
                userService.savestudent($scope.student)
                    .then(function(results){
                    if(results.success){
                         $scope.message = results;

                    }
                });
            }
        };

        $scope.getlist=function(){
            userService.getlist()
            .then(function(results){
                    if(results.success){
                         $scope.studentlist = results;
                        $rootScope.$emit("header:title", results.title);

                    }
                });
        }

        $scope.start = function () {
            $scope.student={}
        };

        $scope.start();

    }

    app.controller('homeController', ['$scope', 'userService',homeController,]);

})();
