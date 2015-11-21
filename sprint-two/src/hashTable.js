var HashTable = function(){
  this.currentSize = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];

  //handle the doubling when 75% of the limit is reached
  if(this.currentSize >= this._limit * .75 ){
    this.resize(2);
  }

  if(!Array.isArray(this._storage.get(i))){ // check if anything was stored before
    this._storage.set(i, []);
  }
  var inner = this._storage.get(i);
  if(!inner.length){
    inner.push(tuple);
  }else{
    var matched = false;
    for(var j = 0; j < inner.length; j++){
      if(inner[j][0] === k){
        inner[j][1] = v;
        matched = true;
        break;
      }
    }
    !matched && inner.push(tuple);
  }
  this.currentSize++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var inner = this._storage.get(i);
  if(inner){
    for(var j = 0; j < inner.length; j++){
      if(inner[j][0] === k){
        return inner[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var inner = this._storage.get(i);
  for(var j = 0; j < inner.length; j++){
    if(inner[j][0] === k){
      inner[j][1] = null;
    }
  }
  this.currentSize--;

  //handle the halving when currentSize is below 25% of limit
  if(this.currentSize <= this._limit * .25 && this._limit > 8){
    this.resize(0.5);
  }
};

//helper method to size up or down the table
HashTable.prototype.resize = function( sizeCoefficient ) {
  var newLimit = this._limit *= sizeCoefficient;
    var newArray = LimitedArray(this._limit);
    this._storage.each(function(item){
      if(Array.isArray(item)){
        for(var j = 0; j < item.length; j++){
          var tempTuple = item[j];
          var newHash = getIndexBelowMaxForKey(tempTuple[0], newLimit);
          if(!Array.isArray(newArray.get(newHash))) {
            newArray.set(newHash, []);
          }
          newArray.get(newHash).push(tempTuple);
        }
      }
    });
    this._storage = newArray;
}


//helper method for printing out hashtable
HashTable.prototype.printTable = function(msg) {
  console.log(msg);
  for(var i = 0; i < this._limit; i++) {
    console.log('Bucket:', i);
    var inner = this._storage.get(i);
    if(Array.isArray(inner)) {
      for(var j = 0; j < inner.length; j++) {
        console.log('\tvalue: ', j, ' tuple = ', inner[j]);
      }
    } else {
      console.log('empty bucket');
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 /*
  insert: O(1) if collision O(n)
  retrieve: O(1) if collision O(n)
  remove: O(1) if collision O(n)
  // helper methods
  resize: O(n^m)
  printTable: O(n^m)
 */
