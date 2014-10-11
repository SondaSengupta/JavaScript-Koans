
module("About Strings (topics/about_strings.js)");
//Question 27 testing that single quotes are the same as double quotes as long as you use them consistently. [true]//
test("delimiters", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    equal(true, singleQuotedString === doubleQuotedString, 'are the two strings equal?');
});

//Question 28 testing that you can concatenate two strings to make a word [apple pie]//
test("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    equal("apple pie", fruit + " " + dish, 'what is the value of fruit + " " + dish?');
});

//Question 29 testing that Javascript uses strings to type characters [string]//
test("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equal("string", characterType, 'Javascript has no character type');
});

//Question 30 testing that you can use the backlash as an escape character that tells Javascript to read the next few letters not as code but as text. This means to read u0041 as text which is Unicode 00441 or the capital letter [A]//
test("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    equal("Apple", stringWithAnEscapedCharacter, 'what  is the value of stringWithAnEscapedCharacter?');
});

//Question 31 testing that using the length property you can find the number of characters in a string [5]//
test("string.length", function() {
    var fruit = "apple";
    equal(5, fruit.length, 'what is the value of fruit.length?');
});

//Question 32 testing that you can output only a portion of the word. This example states to cut out zero through five. Zero starts at quotes, A is 1, B is 2, etc and so it makes the word [apple]//
test("slice", function() {
    var fruit = "apple pie";
    equal("apple", fruit.slice(0,5), 'what is the value of fruit.slice(0,5)?');
});
