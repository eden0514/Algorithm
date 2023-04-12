function solution(players, callings) {
    for (let i = 0; i < callings.length; i++){
        let cIdx = players.indexOf(callings[i])
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
