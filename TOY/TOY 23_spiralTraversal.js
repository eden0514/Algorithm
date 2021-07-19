const spiralTraversal = function (matrix) { 
  let result = [];
  //만약 matrix가 빈 배열이라면 그대로 빈 배열을 리턴
  if(!matrix.length) return result;
  // 한 바퀴를 돌리면 다시 반복을 돌려줘야해
 while(matrix.flat().length){
   //matrix[0]을 순서대로 훑기 👉 이 방향으로
    while(matrix[0].length){
    result.push(matrix[0].shift());
  }
  //그 다음 matrix를 돌며 인덱스들의 마지막 인덱스들을 추가 👇 이 방향으로
  matrix.forEach(row =>{
    result.push(row.pop());
  });
  //마지막 인덱스를 역순으로 추가해주기 👈 이 방향으로
  while(matrix[matrix.length-1].length){
    result.push(matrix[matrix.length-1].pop())
  }
  //마지막 인덱스에서 위로 올라가며 맨 앞의 인덱스 추가해주기 👆 이 방향으로
  //reverse()를 사용한 이유? forEach는 인덱스 순으로 돌기 때문에 우리는 그 역순의 값을 순서대로 추가해줘야 하기 때문!
  matrix.reverse().forEach(row=>{
    result.push(row.shift())
  })
  //남아 있는 matrix의 값 중 빈 배열인 것을 제외 시키고 다시 반복 해주기 위해
  matrix = matrix.reverse().filter((el)=>el.length)
 }
  return result.join('');
};
