function solution(a, b) {
  //두 값 중 큰 값과 작은 값을 구분해놓고 작은 값에서 큰 값까지 for문을 돌며 result라는 변수에 값을 모두 더해준다.
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    let result = 0;
    for(let i = min; i <=max;i++){
        result += i
    }
    return result;
}
