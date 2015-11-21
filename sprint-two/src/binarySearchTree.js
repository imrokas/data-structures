var BinarySearchTree = function(value){
	var tree = Object.create(BinarySearchTree.prototype);
	tree.value = value;
	tree.left = null;
	tree.right = null;
	return tree;
};

BinarySearchTree.prototype.insert = function( valueToAdd ) {
	if(this.value > valueToAdd) {
		if(!this.left) {
			this.left = BinarySearchTree(valueToAdd);
		}
		else {
			this.left.insert(valueToAdd);
		}
	} 
	if(this.value < valueToAdd) {
		if(!this.right) {
			this.right = BinarySearchTree(valueToAdd);
		}
		else {
			this.right.insert(valueToAdd);
		}
	}
};
BinarySearchTree.prototype.contains = function( valueToFind ) {
	if(this.value === valueToFind) {
		return true;
	}
	else if(this.value > valueToFind) {
		return this.left === null ? false : this.left.contains(valueToFind);
	}
	else if(this.value < valueToFind){
		
		return this.right === null ? false : this.right.contains(valueToFind);
	}
	return false;
};
BinarySearchTree.prototype.depthFirstLog = function(cb) {
	//handle the root
	cb(this.value);

	//handle the left side of the tree
	if(this.left) {
		this.left.depthFirstLog(cb);
	}

	//handle the right side of the tree
	if(this.right) {
		this.right.depthFirstLog(cb);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
	insert: O(log(n))
	contains: O(log(n))
	depthFirstLog: O(n)
*/