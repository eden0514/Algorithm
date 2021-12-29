function solution(A,B){
  //인자로 받은 두 배열을 하나는 오름차순으로 하나는 내림차순으로하고 제일 큰 값과 작은 값이 매칭되게끔 만들어준다.
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
  //그 다음 각각의 값을 곱해주고 해당 값들을 모두 더해주면 된다.
    let result = A.map((el,idx)=>el*B[idx])
    return result.reduce((a,c)=>a+c)
}
