//테스트는 통과하나, 효율성 테스트는 실패가 뜸
// 배열 arr의 크기 : 1,000,000 이하의 자연수인 것으로 보아 O(n) 또는 O(log n)이어야 함.
// 효율성 검사가 통과되지 않는 코드는 for문을 돈 이후에 다시 filter를 해줘서 그런가...?
//효율성 검사 통과되는 코드 O(n)
function solution(arr){
    
    return arr.filter((el,idx)=> el !== arr[idx+1])
}
/*
function solution(arr){
    let result = [];
    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] === arr[i+1]){
            result.push(i)
        }
    }
    return arr.filter((el,idx)=> !result.includes(idx))
}*/
