function solution(x) { 
  //숫자형 인자를 문자열로 변환한 후 배열의 형태로 나눠준 다음 배열의 요소들을 다시 숫자로 변환시켜준다.
    let arr = String(x).split('').map((el)=> +el);
  //해당 배열의 합을 더해준 값
    let sumNum = + arr.reduce((a,c)=>a+c);
  // 인자를 자릿수들을 더한 값으로 나머지 연산자를 했을 때 딱 맞아 떨어지는 경우에는 true를 그렇지 않은 경우에는 false를 리턴해준다.
    return x%sumNum ? false : true;
}
