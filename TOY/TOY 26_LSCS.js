//LSCS: 주어진 배열의 연속된 부분 배열의 합을 구한다고 할 때, 이 중 가장 큰 값(Largest Sum of Contiguous Subarray)
//연속 부분 배열 ex) [1,2,3] => [1], [2], [3], [1,2], [2,3], [1,2,3]
const LSCS = function (arr){
  let sumItem = 0;
  let max = Number.MIN_SAFE_INTEGER; // JavaScript에서 안전한 최소 정수값 (-(253 - 1)) 음수가 나올 수 있으므로 가장 안전한 수를 max에 우선 넣어주기
  
  for(let i = 0; i < arr.length; i++){
    // 연속 부분 배열의 합 중 제일 큰 값을 찾는 값이므로 합을 찾기 위해 더해준다.
    sumItem = sumItem + arr[i];
    //만약 더한 값 중 제일 큰 값을 반환해야하므로 max라는 변수에 따로 빼둔다.
    if(max < sumItem) max = sumItem;
    // 만약 더한 값이 음수가 된다면 다음 값에 더해도 작아지므로 끊어주기!
    if(sumItem < 0) sumItem = 0
  }
  //최종적으로 제일 큰 값을 담은 max를 리턴해준다!
  return max;
}
