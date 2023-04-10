function solution(n, computers) {
    let result = 0;
    let visited = Array(n).fill(false);
    
    function dfs(idx){
        visited[idx] = true;
        
        for(let i=0; i < n; i++){
            if (computers[idx][i] && !visited[i]){
                dfs(i)
            }
        }

    }
    
    for (let c = 0 ; c <n ; c++){
        if (!visited[c]){
            dfs(c);
            result++
        }
    }
    return result;
}
//bfs로도 풀어보기!
function solution(n, computers){
//전체적으로 dfs 랑 비슷하지만 dfs의 경우 방문하지 않고 나와 연결된 컴퓨터의 경우 재귀적으로 함수를 호출하여 완전탐색하지만 
//bfs의 경우 아직 방문하지 않은 나와 연결된 컴퓨터를 queue에 넣어서 queue 순서로 컴퓨터를 점검
}
