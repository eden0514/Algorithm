function solution(s) {
  //s의 길이가 홀수인 경우
    if(s.length % 2 === 1){
        return s[Math.floor(s.length/2)]
    }else{
      //s의 길이가 짝수인 경우
        return s.slice(s.length/2-1,s.length/2+1)
    }
}
