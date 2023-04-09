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
