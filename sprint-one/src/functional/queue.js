var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var temp = storage[0];
    delete storage[0];
    for(var key in storage) {
      storage[key - 1] = storage[key];
    }
    if (count) {
      count --;
    }
    return temp;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
