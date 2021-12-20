function solution(n) {
  // 0인 경우 제외
    if(n < 1) return 0;
  
    let result = [];
  //1부터 돌며 자기 자신과 나눠지는 숫자들을 배열의 형태로 묶어주기
    for(let i = 1; i <= n;i++){
        if(n%i === 0){
            result.push(i)
        }
    }
  // 해당 배열은 n의 약수이므로 reduce를 이용해 해당 값들을 모두 더해주기
    return result.reduce((a,c)=>a+c)
    
}
