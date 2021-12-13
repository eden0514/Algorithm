function solution(num) {
  //인자로 받은 num을 나머지 연산자를 사용해 2로 나눴을 때 1이 나오면 홀수이고, 0이면 짝수이기 때문에 삼항 연산자를 사용하여 falsy한 값과 truthy한 값을 이용해서 리턴해주면 된다. 
    return num%2 ? "Odd" : "Even";
}
