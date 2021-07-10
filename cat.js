function cat(){
	this.stomach = [];
}

cat.prototype.ead = function(mouse) {
	this.stomach.push(mouse);
};

module.exports=cat;