function solution(a, b) {
  //우선 a배열의 인덱스와 b배열의 인덱스를 우선 곱한 배열을 만들고,
    let result = a.map((el,i)=>el*b[i]);
  //곱한 배열의 합을 리턴하면된다.
    return result.reduce((a,c)=>a+c)
}
//위 코드보다 reduce만 사용해서 간결한 코드를 만들 수 있을 것 같다.
