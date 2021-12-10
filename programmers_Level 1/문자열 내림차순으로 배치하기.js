function solution(s) {
  //인자를 문자열에서 배열로 바꾸고
    let arr = s.split('');
  //해당 배열을 내림차순으로 변경
    arr.sort((a,b) => {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
    })
  //배열을 다시 문자열로 리턴
    return arr.join('')
}
/*
//다른 풀이로
function solution(s) {
  return s.split('')
  .sort()
  .reverse()
  .join('')
}
*/
