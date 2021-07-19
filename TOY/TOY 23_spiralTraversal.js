const spiralTraversal = function (matrix) { 
  let result = [];
  if(!matrix.length) return result;
  //top left to top right
 while(matrix.flat().length){
    while(matrix[0].length){
    result.push(matrix[0].shift());
  }
  //top right to bottom right
  matrix.forEach(row =>{
    result.push(row.pop());
  });
  //bottom right to bottom left
  while(matrix[matrix.length-1].length){
    result.push(matrix[matrix.length-1].pop())
  }
  //bottom left to top left
  matrix.reverse().forEach(row=>{
    result.push(row.shift())
  })
  matrix = matrix.reverse().filter((el)=>el.length)
 }
  return result.join('');
};
