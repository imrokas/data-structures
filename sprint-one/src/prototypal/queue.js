var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.beginIndex = 0;
  obj.endIndex = 0;
  obj.memory = {};

  return obj;
};

var queueMethods = {
	enqueue: function( value ) {
		this.memory[this.endIndex] = value;
		this.endIndex++;
	},
	dequeue: function() {
		if ( this.beginIndex !== this.endIndex ) {
			var dequeuedItem = this.memory[this.beginIndex];
			delete this.memory[this.beginIndex];
			this.beginIndex++;
			return dequeuedItem;
		}
	},
	size: function() {
		return this.endIndex - this.beginIndex;
	}
};


