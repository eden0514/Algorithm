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
//이렇게 바꾸면 실패 -> pObj가 고정값으로 존재하므로 이미 calling이 된 친구는 변한 값으로 존재해야함.... 다시 생각해보기
//배열로 하지 않고 객체 value 값을 변경하여 최종적으로 value 순서대로 다시 배열로 만들면??
