var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
  	currentSize: 0,
  	memory: {}
  };

  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
	push : function( value ){
		this.currentSize++;
		this.memory[this.currentSize] = value;
	},
	pop : function(){
		if( this.currentSize ) {
			var poppedItem = this.memory[this.currentSize];
			delete this.memory[this.currentSize];
			this.currentSize--;
			return poppedItem;
		}
	},
	size : function(){
		return this.currentSize;
	}
};


