/**
 * Created by kuldeep on 1/26/2017.
 */
/* The target of this programme is to make a function that takes an Array as argument
   and returns odd array without using for loop and inbuilt loops.
   So first thing arise that how to iterate that array like loop but not use loop.
   I think about recursive function where function calls itself till some conditions.
   then I got idea that timeout function which can call a function.
   So implemented logic using $timeout that is inbuilt function of Angular . by passing 0 means
   calling this function with no delay.and finally I created a function calling itself.
* */

angular.module("challenge1App",[]).controller("myController",function ($scope,$timeout) {

    $scope.myarray =[1,2,3,4,5,6,7,8,9,10,11,12,13];//Here enter the numbers that you want to filter as Odd

    $scope.toOddArray = function (Array) {
        result = [];
        $timeout(function arrayConvert() {
            var value = Array.shift();     //retrieving array one by one
            if(value & 1){                 //checking LSB- This is faster than check %2 !== 0 is LSB 1 means it is odd
                result.push(value);        //if odd than push into new value
            }
            if(Array.length){
                $timeout(arrayConvert,0);  //if array is not empty, again call timeout and that invokes function arrayConvert again
            }                              //so that is the recursive function
        },0);
        return result;
    }
});
