var HashTable = function(){
  this.currentSize = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];

  //handle the doubling when 75% of the limit is reached
  if(this.currentSize >= this._limit * .75){
    this._limit *= 2;
    var doubledArray = LimitedArray(this._limit);
    this._storage.each(function(item, index){
      if(item){
        for(var j = 0; j < item.length; j++){
          var tempTuple = item[j];
          var newHash = getIndexBelowMaxForKey(tempTuple[0], this._limit);
          doubledArray.get(newHash) === undefined && doubledArray.set(newHash, []);
          doubledArray.get(newHash).push(tempTuple);
        }
      }
    })
    this._storage = doubledArray;
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
  console.log("remove:", inner, ' ', k);
  for(var j = 0; j < inner.length; j++){
    if(inner[j][0] === k){
      inner[j][1] = null;
    }
  }
  this.currentSize--;

  //handle the halving when currentSize is below 25% of limit
  if(this.currentSize <= this._limit * .25){
    this._limit /= 2;
    var halvedArray = LimitedArray(this._limit);
    this._storage.each(function(item, index){
      if(item){
        for(var j = 0; j < item.length; j++){
          var tempTuple = item[j];
          var newHash = getIndexBelowMaxForKey(tempTuple[0], this._limit);
          halvedArray.get(newHash) === undefined && halvedArray.set(newHash, []);
          halvedArray.get(newHash).push(tempTuple);
        }
      }
    })
    this._storage = halvedArray;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
