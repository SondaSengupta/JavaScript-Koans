module("About Scope (topics/about_scope.js)");

//Question 70 states that global variables are ones that are outside a function and can be implemented by any function which means the answer will display as the variable [77]//
thisIsAGlobalVariable = 77;

test("global variables", function() {
    equal(77, thisIsAGlobalVariable, 'is thisIsAGlobalVariable defined in this scope?');
});

//Question 71 states that when you are within a function both the inner and outer variable will compute, but when you get outside the function only the global variable will work and the one that is inside the function is a local variable that becomes undefined//
test("variables declared inside of a function", function() {
    var outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
        var innerVariable = "inner";
        equal("outer", outerVariable, 'is outerVariable defined in this scope?');
        equal("inner", innerVariable, 'is innerVariable defined in this scope?');
    })();

    equal("outer", outerVariable, 'is outerVariable defined in this scope?');
    equal("undefined", typeof(innerVariable), 'is innerVariable defined in this scope?');
});
