 function factorialize(num) {
    var product = 1
    for (var i = 1; i <= num; i=i+1){
    product = product * i
    }
    return product;
  }
  
  factorialize(5);
