function solution(n) {
    let result ='';
  //n번을 반복하며 홀수일 때는 '수'를 추가하고, 짝수일 때는 '박'을 추가해준다.
    for(let i = 1; i <= n;i++){
        i%2 ? result += '수' : result += '박';
    }
    return result;
}
