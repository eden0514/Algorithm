function solution(n) { 
  //인자인 n을 제곱근한 값이 소수가 아니고 정수인 경우 제곱근한 값+1을 한 값을 제곱한 값을 리턴해주고, 제곱근하여 정수로 떨어지지 않는 값은 -1로 리턴한다.
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1)**2 : -1
}
