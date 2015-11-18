var Queue = function(){
  var someInstance = {};
  var beginIndex = 0;
  var endIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[endIndex] = value;
    endIndex++;
  };

  someInstance.dequeue = function(){
    if(beginIndex !== endIndex){
     var dequeued = storage[beginIndex];
     delete storage[beginIndex];
     beginIndex++; 
     return dequeued;
    }
  };

  someInstance.size = function(){
    return endIndex - beginIndex;
  };

  return someInstance;
};
