const robotPath = function (room, src, dst) {
  // room => matrix
  //src => start 지점
  //dst => destination
  //길을 가는 함수
  const pathing = function (M,N,src,step){ 
    // M 매트릭스의 세로
    // N 매트릭스의 가로
    // src 시작점
    // count 시작점부터 도착점까지 최단 거리 찾기 위해
    const [i,j] = src
    if(i < 0 || i >= M || j < 0 || j >= N) return; //room 경계 넘어가지 말라!
    
    if(room[i][j] === 0 || room[i][j] > step){ // 1이면 장애물이므로 갈 수 없음
      room[i][j] = step
    }else return;

    //만약에 리턴문을 맞으면 타고타고 넘어왔던 step이 제자리로 돌아감
    pathing(M,N,[i-1,j],step+1)//up 
    pathing(M,N,[i+1,j],step+1)//down
    pathing(M,N,[i,j-1],step+1)//left
    pathing(M,N,[i,j+1],step+1)//right
  }
  pathing(room.length,room[0].length, src,1)
 // 결국 모든 값의 스텝이 들어가 있게 되고 그 값 중 도착지점의 값을 찾아주면 된다.
  const [k,l] = dst;
  return room[k][l]-1
};
