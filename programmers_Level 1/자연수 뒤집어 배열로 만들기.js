//reverse()사용한 경우
function solution(n) {
    let arr = String(n).split('').reverse();
    return arr.map(el=>Number(el));
}


/*function solution(n) {
  //인자인 자연수를 문자열로 변환하여 해당 값을 split을 사용해 배열로 변환
    let arr = String(n).split('');
  //배열을 뒤에서 앞으로 반복문을 돌리면서 result라는 배열에 해당 값을 숫자로 변환하여 추가하기
    let result = [];
    for(let i = arr.length-1;i >= 0; i--){
        result.push(Number(arr[i]))
    }
    return result;
}*/
