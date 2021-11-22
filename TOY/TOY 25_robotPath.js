const robotPath = function (room, src, dst) {
  //m - 세로 길이 n - 가로 길이 룸을 벗어나면 안 되므로
  let M = room.length;
  let N = room[0].length;
  //재귀를 돌릴 함수 만들어줌
  function pathing(M,N,src,step){
    //구조분해 할당으로 두 값을 나눠줌
    let [fIdx,sIdx] = src;
    // room을 벗어나면 안 되므로 그냥 리턴을 시켜준다.
    if(fIdx < 0 || sIdx < 0 || fIdx > M-1 || sIdx > N-1)return;
    //1은 장애물이므로 0인 곳으로만 이동이 가능
    //src -> dst로 가는 여러 길 중 이미 한 곳으로 가봤을 때에는 이미 step의 숫자가 찍혀 있음 그러므로
    // 그 길도 지나갈 수 있어야 하므로 나의 스텝보다 밑의 스텝발자국이 더 큰 수면 그거는 장애물이 아니므로 지나갈 수 있어야 함.
    // 가는 길마다 step을 하나씩 늘려가면 최종 목적지에는 도착하기 위한 step의 갯수가 찍혀 있을 것.
    if(room[fIdx][sIdx] === 0 || room[fIdx][sIdx] > step ){
      room[fIdx][sIdx] = step
    }else return;
    //다음 스텝에서 상하좌우로 가보며 갈 수 있는 길을 탐색
    pathing(M,N,[fIdx-1,sIdx],step+1) //상
    pathing(M,N,[fIdx+1,sIdx],step+1) //하
    pathing(M,N,[fIdx,sIdx-1],step+1) //좌
    pathing(M,N,[fIdx,sIdx+1],step+1) //우
  }
  pathing(M,N,src,1)
  // step의 초기값을 1을 줬기 때문에 마지막에 다시 하나를 빼줘야 함.
  return room[dst[0]][dst[1]]-1;
};
/*
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
*/
