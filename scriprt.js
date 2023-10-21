"use strict";
let numbers = document.querySelectorAll(".number");
let specialChar = document.querySelectorAll(".special");
let input = document.querySelector("input");
let cancel = document.querySelector(".c");
let equalTo = document.querySelector("#equalsTo");

// number buttons 
numbers.forEach(function(element) {
    element.addEventListener("click",function () {
        const innerNum = element.innerHTML;
            input.value += innerNum;
    });
});

// cancel button 
cancel.addEventListener("click", function(){
    input.value = "";
});

specialChar.forEach(function(element) {
    element.addEventListener("click", function () {
        const innerSpecial = element.innerHTML;
        if (input.value == "") {
            input.value != input.value+innerSpecial;
        }else{
        input.value += innerSpecial;

        }
    });
});
// for equal button 
equalTo.addEventListener("click", function(){
    input.value = eval(input.value)
});

