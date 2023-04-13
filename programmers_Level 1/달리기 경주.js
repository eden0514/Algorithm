function solution(players, callings) {
    let pObj = {};
    for(let i =0; i < players.length; i++){
        pObj[players[i]] = i
    }
    
    for (let i = 0; i < callings.length; i++){
        let cIdx = pObj[callings[i]]
        let bIdx = cIdx-1
        if (bIdx < 0) {
            continue;
        }
        [ players[cIdx], players[bIdx] ] = [ players[bIdx], players[cIdx] ]
    }
    return players
}
//해당 코드의 경우 시간초과로 최적화 필요
//indexOf 사용 부분 변경 필요 - players 배열을 선형 검색하여 값을 찾기 때문
//player를 key로 index 값을 value로
