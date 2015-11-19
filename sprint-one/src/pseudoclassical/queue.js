var Queue = function() {
	this.beginIndex = 0;
	this.endIndex = 0;
	this.memory = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function(){
	return this.endIndex - this.beginIndex;
}
Queue.prototype.enqueue = function(value){
	this.memory[this.endIndex] = value;
	this.endIndex++;

}
Queue.prototype.dequeue = function(){
	if(this.endIndex !== this.beginIndex){
		var dequeuedItem = this.memory[this.beginIndex];
		delete this.memory[this.beginIndex];
		this.beginIndex++;
		return dequeuedItem;
	}
}