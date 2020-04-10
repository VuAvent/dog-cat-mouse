function Cat(name){
	this.stomach = [];
	this.name = "";
}
Cat.prototype.eat = function(mouse){	
	this.stomach.push(mouse);
};
module.exports = Cat; 