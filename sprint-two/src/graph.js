

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = [];  
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return node in this;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
 _.each(this[node], function(node) {
    this.removeEdge(this[node], node);
  }); 
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this[fromNode], toNode);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var i = _.indexOf(this[fromNode], toNode);
  if(i !== -1) {
    this[fromNode].splice(i, 1);
  }
  if(_.indexOf(this[toNode], fromNode) !== -1) {
    this.removeEdge(toNode, fromNode);
  } 
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    if(this.hasOwnProperty(key)) { 
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(n)
 removeNode: O(n^2)
 hasEdge: O(n)
 addEdge: O(1)
 removeEdge: O(n)
 forEachNode: O(n)
 */



