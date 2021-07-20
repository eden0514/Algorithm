function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  //리턴해줄 숫자를 하나 변수로 만들어 주기
  let getPoint = 0;
  //start point 설정 board[0][0] => board[firstIdx][secondIdx]
  let firstIdx = 0;
  let secondIdx = 0;
  // 방향키 객체 설정해주기
  let DIR = {
    'U':[-1,0],
    'D':[1,0],
    'L':[0,-1],
    'R':[0,1]
  }
  //board를 벗어나면 곧바로 'OUT'을 리턴해줘야 하므로 아웃의 여부를 확인하는 함수 작성
  const IsOut = (first,second)=> first >= 0 && first < board.length && second >= 0 && second < board.length 
  // 오퍼레이션을 돌면서 키 조작
  for(let i = 0; i < operation.length;i++){
    // 구조분해 할당으로 firstIdx 값과 secondIdx 값을 변환시켜주기
    const [a,b]= DIR[operation[i]] 
    firstIdx = firstIdx + a
    secondIdx = secondIdx + b
    //만약 IsOut 함수에 들어간 값이 false 값이면 바로 'OUT'
    if(!IsOut(firstIdx,secondIdx)) return 'OUT';
    //그게 아니면 포인트에 해당 인덱스의 값을 적립!
    getPoint = getPoint+board[firstIdx][secondIdx];
  }
return getPoint;
};
