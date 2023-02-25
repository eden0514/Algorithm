function solution(maps) { 
    let m = maps.length-1; // 맵의 크기 확인
    let n = maps[0].length-1;
    const direction =[[-1,0],[1,0],[0,-1],[0,1]]//상하좌우

    if (!maps[m][n-1] && !maps[m-1][n]){
        return -1; //맵의 도착점이 막혀있는 경우
    }else if(!maps[0][1] && !maps[1][0]){
        return -1; // 맵의 시작점이 막혀 있는 경우
    }else{
        //시작점을 우선 추가
        let queue = [[0,0]]
        //더이상 탐색을 할 수 없으면 종료
        while(queue.length){
            let current = queue.shift(); //현재 포인트
            for (let i = 0; i < direction.length; i++){
                let x = current[0] + direction[i][0]
                let y = current[1] + direction[i][1]
                if(x < 0 || x > m || y < 0 || y > n){
                    continue; // 맵의 범위를 벗어난 경우
                }else{
                    if(maps[x][y] === 1){ //앞으로 갈 수 있는 곳을 탐색 queue에 추가
                    queue.push([x,y])
                    maps[x][y] = maps[current[0]][current[1]] + 1 //탐색을 한 곳이면 maps의 값을 변경하여 탐색한 것을 확인 및 거리 남겨 놓기
                    }
                }
            }
        }
    }
    if(maps[m][n] == 1){ // 탐색이 끝나더라도 도착점에 도착하지 못한 경우
        return -1;
    }else{
        return maps[m][n];
    }             
}
