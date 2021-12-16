//테스트는 통과하나, 효율성 테스트는 실패가 뜸
// 배열 arr의 크기 : 1,000,000 이하의 자연수인 것으로 보아 O(n) 또는 O(log n)이어야 함.
// 밑의 시간복잡도는 O(n)이지만 효율성에서 실패가 뜸. 그러면 O(n)보다 빠른 시간복잡도로 작성을 해야한다는 것 같음.
// 효율성을 올리기 위해서는 for문말고 다른 걸 사용해야할 것 같음
// 어떻게 해야할까...?

function solution(arr){
    let result = [];
    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] === arr[i+1]){
            result.push(i)
        }
    }
    return arr.filter((el,idx)=> !result.includes(idx))
}
