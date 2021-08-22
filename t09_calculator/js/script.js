function Calculator() {
    this.add = function(input) {
      var result = 0;
      for(i = 0; i<input.length; ++i) {
        result += input[i];
      }
      return result;
    }
  
    this.multiply = function(input) {
      var result = 1;
      for(i=0; i<input.length; ++i) {
        result *= input[i];
      }
      return result;
    }
  }

  
  function Calculator() {
    var operator = function(result, input) { return result + input; };
    this.add = function(input){
      return operation(input, operator);
    };
  
    this.multiply = function(input){
      return operation(input, function(result, input) { return result * input; });
    }
  
    this.subtract = function(input){
      return operation(input, function(result, input) { return result - input; });
    }
    
    this.divide = function(input){
      return operation(input, function(result, input) { return result / input; });
    }
  
    function operation(input, operator) {
      var result = input.shift();
      for(i = 0; i < input.length; i++){
        result = operator(result, input[i]);
      }
      return result;
    }
  }
  