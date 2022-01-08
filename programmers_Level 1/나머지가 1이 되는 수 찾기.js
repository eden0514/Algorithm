function solution(n) { 
  //1과 자기 자신은 모두 나누어 떨어지는 수이므로 2부터 n-1을 돌며 해당 값으로 나누었을 때 1이 남는 숫자를 바로 리턴 시키면 최소인 값을 리턴 받을 수 있다.
    for(let i = 2; i < n; i++){
        if(n%i === 1) return i
    }
}
