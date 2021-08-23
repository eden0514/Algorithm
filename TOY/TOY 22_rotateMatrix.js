const rotateMatrix = function (matrix,k = 1) {
  //k는 회전하는 횟수
  // TODO: 여기에 코드를 작성합니다.
  /**
   * 
00 30 /01 20 /02 10/ 03 00
10 31/11 21/12 11/13 01
20 32/21 22/22 12/23 02
30 33/31 23/32 13/33 03
// matrix[앞][뒤] 앞의 숫자가 커지면 -> 뒤의 숫자가 커진다.
// matrix[앞][뒤] 뒤의 숫자가 커지면 -> 앞의 숫자가 준다.
   */
  //m - 행/세로의 갯수(matrix.length) n - 열/ 가로의 갯수(matrix[0].length)
  if(matrix.length === 0) return [];
  k = k % 4;
  //360도 돌면 자기 자신과 똑같으므로
  if(k===0)return matrix;
// k번 반복해준다. matrix 는 돌때마다 새로운 값이 들어간다.
  for(let i = 0; i < k;i++){
    matrix = rotate(matrix)
  }
  return matrix;
};

// 돌려주는 함수를 따로 빼줌.
const rotate = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;
  // 90도로 돌린 배열을 새로 담을 곳
  const matrix2 = [];
 //2차원 배열이므로 이중 for문 사용해서 그 안을 채워 줌.
  for(let i = 0; i < n;i++){
    matrix2[i] = [];
    for(let j = 0; j < m; j++){ 
      matrix2[i][j] = matrix[m-1-j][i]
    }
  }
  return matrix2
}
