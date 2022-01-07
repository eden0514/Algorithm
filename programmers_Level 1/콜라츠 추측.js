function solution(num) {
  //한 단계할 때마다 1씩 count를 증가시켜줌.
    let count = 0;
  //500번을 돌려도 안 될 때는 반복을 빠져나와야 하므로 500을 최대값으로 넣어줌.
    for(let i = 0; i < 500;i++){
      //num이 1이 되면 반복을 빠져나오게 함.
        if(num === 1) break;
      //짝수인 경우
        if(num%2 === 0){
            num = num/2;
            count++;
        }else{
          //홀수인 경우
            num = 3*num + 1;
            count++;
        }
    }
  //만약 카운트가 500이 아니라면 반복된 횟수를 리턴하고, 500번 해도 안 된 경우는 -1을 리턴한다.
    return count === 500 ? -1 : count;
}
