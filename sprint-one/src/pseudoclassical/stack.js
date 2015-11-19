var Stack = function() {
  this.currentSize = 0;
  this.memory = {};
};

Stack.prototype.push = function(value){
	this.currentSize++;
	this.memory[this.currentSize] = value;
};
Stack.prototype.pop = function(){
	if(this.currentSize){
	  var poppedItem = this.memory[this.currentSize];
	  delete this.memory[this.currentSize];
	  this.currentSize--;
	  return poppedItem;
	}
};
Stack.prototype.size = function(){
	return this.currentSize;
};


