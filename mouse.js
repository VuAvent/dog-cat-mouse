function Mouse (name) {
	this.name = name;
	this.dead = false;
	this.age = [];
}
Mouse.prototype.die = function(){
	this.dead = true;
};

module.export = Mouse;