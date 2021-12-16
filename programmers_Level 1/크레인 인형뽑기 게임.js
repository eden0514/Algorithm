function solution(board, moves) { 
  // 크레인으로 옮긴 인형을 담는 탑
    let tower = [];
  // 보드에 있는 인형들을 모으는 2차원 배열을 담을 그릇
    let result = [];
  // 제거가 되는 인형들의 갯수를 담을 변수
    let remove = 0;
  //이중포문을 돌며 board 배열의 [0][1] [1][1] 처럼 뒤의 인덱스가 같은 애들끼리 묶어줌. 단, 해당 값이 0일 경우는 제외해야 인형이 있는 것들만 들어감.
    for(let i = 0; i < board.length;i++){
        let arr = [];
        for(let j = 0; j < board.length; j++){
            if(board[j][i]){
                arr.push(board[j][i]);
            }
          // j 포문을 다 돌면 해당 배열을 result라는 배열에 넣어줌.
            if(j === board.length -1){
                result.push(arr);
                
            }
        }
    }
  // 마지막 값을 pop해서 빼낼 수 있도록 reverse를 해줌
    result.map(el=>el.reverse());
  //moves를 돌며 해당 배열의 인형들을 tower로 옮겨준다.
  //단, 해당 배열이 빈 배열이 아닌 경우에만 tower에 push해준다.
    for(let i = 0; i < moves.length;i++){
        if(!result[moves[i]-1].length) continue;
            tower.push(result[moves[i]-1].pop())
        let towerLen = tower.length;
      //타워에 들어간 값이 앞의 값과 일치하면 두 개 값을 tower에서 삭제해주고, remove에 2를 더해준다.
        if(tower[towerLen-1] === tower[towerLen-2]){
            tower.pop();
            tower.pop();
            remove += 2;
        }
    }
    return remove;
}
