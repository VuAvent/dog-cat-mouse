var Cat = require("./Cat");
var Mouse = require("./Mouse");
var Dog = require("./Dog");
var cat = new Cat();
var dog = new Dog();


try{
	cat.eat(dog);
} catch (error){
	console.log('Error while Cat eating a dog');
}


var mouse = new Mouse("mickey");


console.log(cat);