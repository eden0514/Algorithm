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
