function solution(n) {
  //숫자를 문자열 형태로 바꿔주고,
    let str = String(n)
    //문자열을 배열로 바꿔준 후 제일 큰 수가 앞으로 오게 sort를 해주고
    let arr = str.split('').sort((a,b)=>b-a);
  //배열을 문자열로 바꾼 후 그 값을 숫자형을 변환하여 return해준다.
    return Number(arr.join('')); // + arr.join('')도 가능
}
