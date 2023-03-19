function quickSort(numbers){
    if (numbers.length <= 1) return numbers //배열의 값이 1개가 되는 경우에는 해당 배열만 리턴
    let pivot = numbers[0]; //기준값
    let left = []; //기준값보다 큰 값은 왼쪽
    let right = [];// 기준값보다 작은 값은 오른쪽
    //배열이 1보다 큰 경우 값 비교
    for(let i = 1 ; i < numbers.length ;i++){
        if (String(pivot)+String(numbers[i]) >= String(numbers[i])+String(pivot)){
            right.push(numbers[i]);
        }else{
            left.push(numbers[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]; //왼쪽과 오른쪽 배열들도 정렬이 필요하므로 재귀

}

function solution(numbers) {
    if (numbers.length <= 1 ) return String(numbers[0]); //배열의 길이가 1인 경우는 해당 값만 리턴

    let result = quickSort(numbers);
   if (result[0] === 0) { //numbers에 0이 포함될 수 있으므로 예외 처리
       return '0'
   }else{
       return result.join('')
   }
  }
