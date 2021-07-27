function fibonacci(n) {
 let memo = [0,1]// 초기값 피보나치는 앞의 두 수를 더해주어야 하므로 최소한의 초기값을 넣어줌.
 
 let fibo = (n)=>{
   if(memo[n] !== undefined) return memo[n]; // 한 번 찾은 값을 memo 배열에 넣어서 두 번 반복 안 하게 저장해놓음
   else{
     memo[n] = fibo(n-1) + fibo(n-2);
   }
 }
 return fibo(n);
}
