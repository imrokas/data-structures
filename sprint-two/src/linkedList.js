var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!list.head){
      list.head = Node(value);
      list.tail = list.head;
    }else{
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
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

  list.insertAfter = function(value, beforeValue){
    var beforeNode = list.search(beforeValue);
    if(beforeNode){
      var newNode = Node(value);
      newNode.next = beforeNode.next;
      beforeNode.next = newNode;
    }
  }
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

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