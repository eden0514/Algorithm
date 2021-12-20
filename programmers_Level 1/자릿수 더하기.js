//숫자형태의 인자를 문자열로 변환 후 다시 배열로 형태로 변환을 시킨 다음 배열의 인자를 숫자형태로 변환하고 해당 값들을 reduce를 사용해 모두 더해주기
function solution(n){
    return String(n).split('').map((el)=> +el).reduce((a,c)=>a+c);
}
