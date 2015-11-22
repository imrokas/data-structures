var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!list.head){
      list.head = Node(value);
      list.tail = list.head;
    }else{
      list.tail.next = Node(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    if(list.head){
      list.head.previous = null;
    }
    return temp;
  };

  list.addToHead = function(value) {
    if(!list.head){
      list.head = Node(value);
      list.tail = list.head;
    }else{
      list.head.previous = Node(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    }
    
  };
  list.removeTail = function() {
    var temp = list.tail.value;
    list.tail = list.tail.previous;
    if(list.tail){
      list.tail.next = null;
    }
    return temp;
  };

  list.search = function(target){
    var tempNode = list.head;
    while(tempNode) {
      if(tempNode.value === target){
        return tempNode;
      }
      tempNode && (tempNode = tempNode.next);
    }
    return null;
  }

  list.contains = function(target){
    return !!list.search(target);
  };

  list.insert = function(value, beforeValue){
    var beforeNode = list.search(beforeValue);
    if(beforeNode){
      var newNode = Node(value);
      newNode.next = beforeNode.next;
      newNode.previous = beforeNode;
      newNode.next.previous = newNode;
      beforeNode.next = newNode;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  addToTail: constant
  removeHead: constant
  contains: linear
*/