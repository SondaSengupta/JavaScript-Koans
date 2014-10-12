// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
module("About Prototype Chain (topics/about_prototype_chain.js)");

var father = {
  b: 3,
  c: 4
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */
//Question 51 asks whether the variable child has an a and b property. [true]//
test("Is there an 'a' and 'b' own property on child?", function () {
  equal(true, child.hasOwnProperty('a'), 'child.hasOwnProperty(\'a\')?');
  equal(true, child.hasOwnProperty('b'), 'child.hasOwnProperty(\'b\')?');
});

//Question 52 asks what a and b are in child//
test("Is there an 'a' and 'b' property on child?", function () {
  equal(1, child.a, 'what is \'a\' value?');
  equal(2, child.b, 'what is \'b\' value?');
});

//Question 53 states that if the b vlue in child was removed what would be the b value now. In this case, it would be the father's b value which is [3]//
test("If 'b' was removed, whats b value?", function () {
  delete child.b;
  equal(3, child.b, 'what is \'b\' value now?');
});

//Question 54 asks whether the child variable contains a c value? [false]//
test("Is there a 'c' own property on child?", function () {
  equal(false, child.hasOwnProperty('c'), 'child.hasOwnProperty(\'c\')?');
});

//Question 55 asks about prototype. A prototype is located outside of the function and it alllows you to make all functions complete what is in the prototype without having it copied within each function. The prototype states that c is 4, so running the prototype with child gives [4]//
// Is there a 'c' own property on child? No, check its prototype
// Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
test("Is there a 'c' property on child?", function () {
  equal(4, child.c, 'what is the value of child.c?');
});

//Question 56 asks about a prototype property that does not exist. What will be the output if you ask for prototype property that does not exist. It is undefined.//
// Is there a 'd' own property on child? No, check its prototype
// Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("Is there an 'd' property on child?", function () {
  equal(undefined, child.d, 'what is the value of child.d?');
});


