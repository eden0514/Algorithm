function solution(arr) {
  //배열의 합을 배열의 길이로 나누면 평균 값을 알 수 
    return arr.reduce((a,c)=>a+c)/arr.length;
}
