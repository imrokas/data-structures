var Queue = function(){
	var obj = {
	  beginIndex : 0,
	  endIndex : 0,
	  memory : {}
	}
	_.extend(obj, queueMethods);
	return obj;
};

var queueMethods = {
  enqueue: function(value){
  	this.memory[this.endIndex] = value;
  	this.endIndex++;
  },
  dequeue: function(){
    if(this.beginIndex !== this.endIndex){
      var temp = this.memory[this.beginIndex];
      delete this.memory[this.beginIndex];
      this.beginIndex++;
      return temp;
    }
  },
  size: function(){
  	return this.endIndex - this.beginIndex;
  }
};


