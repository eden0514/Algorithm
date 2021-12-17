function solution(n, m) {
    let result = [];
  // 인자로 받은 두 값 중 큰 값과 작은 값을 알아내기
    let max = Math.max(n,m)
    let min = Math.min(n,m)
    //최대공약수를 찾는 코드
    //만약 큰 값을 작은 값으로 나머지 연산자를 했을 때 나눠 떨어지는 수면 min값이 두 값의 최대 공약수 이고, 그렇지 않다면
    //min 값을 max%min 한 값으로 나머지 연산자를 했을 때 0이 나오는지를 재귀로 알아낸다.
    let gcd = (max,min)=> max%min === 0 ? min : gcd(min,max%min)
    result[0] = gcd(max,min);
  // 최소 공배수의 경우 두 값을 곱한 값에 최대공약수로 나눠주면 최소공배수가 된다.
    result[1] = n*m/result[0];
    
    return result;
}
