//for문을 이용해 값을 찾음. 밑에껀 왜 안 되는거지..??
function solution(n) {
    let memo = [0,1];
    for(let i = 2; i <= n;i++){
        memo.push((memo[i-1]+memo[i-2])%1234567)
    }
    return memo[n]
}
/*
//메모이제이션을 사용한 답 => 런타임 에러가 남.
function solution(n) {
    let memo = [0,1];
    const aux = (num) => {
      if(memo[num] !== undefined)return memo[num];
      memo[num] = (aux(num-1)+aux(num-2))%1234567;
      return memo[num]
   }
  return aux(n)
}
*/
