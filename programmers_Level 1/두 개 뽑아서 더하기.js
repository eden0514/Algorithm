function solution(numbers) {
    let result = [];
  //이 부분은 조합을 이용해도 될 것 같음. 우선 이중 for문으로 작성하여 자신의 값이 아닌 다른 값을 묶어서 더한 값을 result라는 배열에 넣어줌
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = i+1; j < numbers.length;j++){
            result.push(numbers[i]+numbers[j])
        }
    }
  // 이 중 중복되는 값은 제외시키기
    let set1 = [...new Set(result)];
  //유일한 값이 남은 배열을 오름차순으로 정렬하여 리턴
    return set1.sort((a,b)=>a-b);
}
