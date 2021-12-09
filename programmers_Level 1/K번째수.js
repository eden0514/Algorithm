function solution(array, commands) {
  //array를 command[0]번째 수부터 command[1]번째 수까지 자른 다음
  //자른 배열을 오름차순으로 정렬을 하고
  //정렬한 배열 중 command[2]번째인 숫자를 고르는 문제
    let result = [];
  //여러 개의 배열이 들어오는 2차원 배열의 형태로 들어오기 때문에 각각의 배열 모두 값을 찾아줘야 함.
    commands.forEach((arr)=>{
      //해당하는 값의 구간을 slice로 얕은 복사를 하여 원본은 바뀌지 않게 하고 자른 값을 오름차순으로 정렬하여 해당 값을 새로운 변수에 저장
        let slicedArr = array.slice(arr[0]-1,arr[1]).sort((a,b)=>a-b)
        //인덱스와 번째는 1씩 차이가 있으므로 해당 값을 result라는 변수에 넣어줌.
        result.push(slicedArr[arr[2]-1])
    })
    return result;
}
