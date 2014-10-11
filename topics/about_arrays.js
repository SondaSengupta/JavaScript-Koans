module("About Arrays (topics/about_arrays.js)");

//Question 40 asks about arrays where multiple values are stored in one variables//
test("array literal syntax and indexing", function() {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal("cellar door", favouriteThings[0], 'what is in the first position of the array?');
    equal(42, favouriteThings[1], 'what is in the second position of the array?');
    equal(true, favouriteThings[2], 'what is in the third position of the array?');
});

//Question 41 asks what is the type of an array using the typeof function. An array is an [object]//
test("array type", function() {
    equal("object", typeof([]), 'what is the type of an array?');
});

//Question 42 asks what the amount of values in the variable collection which is [3]//
test("length", function() {
    var collection = ['a','b','c'];
    equal(3, collection.length, 'what is the length of the collection array?');
});

//Question 43 asks about the .splice function. This function adds or removes a value from original array by .splice('position of value', 'number of spots after to remove', 'added values') So varABC=(A, B, C) with a .splice(1,1) means to remove 1 item after the first position so output will be B, since B is removed. When accessing varABC again the output for that will now be A and C. So the var workingWeek is the spliced items Saturday and Sunday and new output for daysofWeek is Monday thru Friday. // 
test("splice", function() {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var workingWeek = daysOfWeek.splice(5, 2);
    ok(workingWeek.equalTo(['Saturday', 'Sunday']), 'what is the value of workingWeek?');
    ok(daysOfWeek.equalTo(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']), 'what is the value of daysOfWeek?');
});

//Question 44 talks about the .push and.pop functions. The push functions adds an item to the end of the array. The pop function removes an item starting from the end of the array.//
test("stack methods", function() {
    var stack = [];
    stack.push("first");
    stack.push("second");

    equal("second", stack.pop(), 'what will be the first value popped off the stack?');
    equal("first", stack.pop(), 'what will be the second value popped off the stack?');
});

//Question 45 talks about unshift. They are just like .push but start from the beginning of the array. So in this example since unshift is done after the first two functions, whatever is the value will show up first in the array. Shift is the same as .pop but for the beginning of the array.//
test("queue methods", function() {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal("third", queue.shift(), 'what will be shifted out first?');
    equal("first", queue.shift(), 'what will be shifted out second?');
});
