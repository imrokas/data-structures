

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
	this.memory = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.memory[node] = {value: node};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	if(this.memory[node]){
		return true;
	}else{
		return false;
	}
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	if(this.memory[node]){
		delete this.memory[node];
	}

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	return !!this.memory[fromNode].edges[toNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
	this.memory[fromNode].edges === undefined && (this.memory[fromNode].edges = {});
	this.memory[fromNode].edges[toNode] = true;
	this.memory[toNode].edges === undefined && (this.memory[toNode].edges = {});
	this.memory[toNode].edges[fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this.memory[fromNode].edges[toNode];
	delete this.memory[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	for(var key in this.memory){
		cb(this.memory[key].value);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: constant
 contains: constant
 remove: constant
 hasEdge: constant
 addEdge: constant
 removeEdge: constant
 forEachNode: linear



 */



