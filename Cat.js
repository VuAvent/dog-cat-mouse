function Cat(){
	this.stomach = [];
	this.name = "";
}
Cat.prototype.eat = function(mouse){	
	this.stomach.push(mouse);
};
module.export = Cat; 