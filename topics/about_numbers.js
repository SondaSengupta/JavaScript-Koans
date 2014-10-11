
module("About Numbers (topics/about_numbers.js)");

//Question 33 testing that Javascript only has numbers, not floats or integers. At one time, there was talk of making more than one number type but that has been disregarded so it is [true] floats and ints are the same. They are both a [number] and 1.0 is the same as [1]//
test("types", function() {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);
    equal(true, typeOfIntegers === typeOfFloats, 'are ints and floats the same type?');
    equal("number", typeOfIntegers, 'what is the javascript numeric type?');
    equal(1, 1.0, 'what is a integer number equivalent to 1.0?');
});

//Question 34 testing NaN. NaN means Not a Number when a math operation cannot be completed such as dividing by zero. NaN is not equal to anything, not even itself and will always result in a NaN with any math operation that includes it, stickyness. The only things that outputs true is a special function isNaN creating 'NaN isNaN'. So if 7 divides by apple giving NaN, then output of 'NaN is NaN' is [true]. But NaN == NaN is [false]//
test("NaN", function() {
    var resultOfFailedOperations = 7/'apple';
    equal(true, isNaN(resultOfFailedOperations), 'what will satisfy the equals assertion?');
    equal(false, resultOfFailedOperations == NaN, 'is NaN == NaN?');
});
