//IIFE stands for Immediately Invoked Function Expression.
// It is a design pattern in JavaScript that involves creating an anonymous function and immediately 
//invoking it. The purpose of an IIFE is to create a new variable scope for the function and
 //prevent naming conflicts with other parts of the code.



 //IIFE with arguments
 (function(a,b){
    document.write("First Value is "+a+" Second Value is "+b)
 })(4,5);