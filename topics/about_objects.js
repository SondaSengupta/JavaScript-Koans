
module("About Objects (topics/about_objects.js)");

//Question 35 testing that all variables are objects and objects are a container for variables especially named variables that list characterstics about the variable. The 'typeof' operator tells you what is the type of the element. For example, 4 is a number so typeof 4 will be number. Typeof empty_object will be ["object"]//
test("object type", function() {
    var empty_object = {};
    equal("object", typeof(empty_object), 'what is the type of an object?');
});

//Question 36 asks what would you have to fill in to give output of person.name being 'Amory Blaine' and person.age '102'. You can access object properties by 'variablename.property' so to access name and age, you will need 'name' and 'age' to be property names//
test("object literal notation", function() {
    var person = {
        name:"Amory Blaine",
        age:"102"
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

//Question 37 asks how to add a property to an existing object you've already made. You can do this by adding 'variable.addedproperty = "property you want added" format. So person.name can still be added on even when the empty var for person is already made. //
test("dynamically adding properties", function() {
    var person = {};
    person.name = "Amory Blaine";
    person.age = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
}); 

//Question 38 shows another way of adding a property to an existing variable. Instead of using the period, you can also surround the property name in quotes and brackets.//
test("adding properties from strings", function() {
    var person = {};
    person["name"] = "Amory Blaine";
    person["age"] = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

//Question 39 in which return is used to output whatever is written inside. To be reviewed.//
test("adding functions", function() {
    var person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return "I Amory Blaine am 102 years old.";  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equal("I Amory Blaine am 102 years old.", person.toString(), "what should the toString function be?");
});
