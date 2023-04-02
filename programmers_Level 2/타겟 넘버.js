function solution(numbers, target) { 
    let answer = 0;
    let result = [];
                                    
    function dfs(curIdx, sum) {
        console.log(result)
        if(curIdx === numbers.length){
            if(sum === target){
                answer +=1;
            }
            return; 
        }
        result.splice(curIdx) // 디버깅을 위해 result값에 어떤 식으로 numbers의 값이 더하고 빼지는지 확인하기 위해 추가
        result.push(`+ ${numbers[curIdx]}`)
        dfs(curIdx + 1, sum + numbers[curIdx]);
        result.splice(curIdx)
        result.push(`- ${numbers[curIdx]}`)
        dfs(curIdx + 1, sum - numbers[curIdx]);
    }
    
    dfs(0, 0);
    
    return answer;
}
