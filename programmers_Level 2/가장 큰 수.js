function solution(numbers) {
    let arr = [numbers[0]];
    for (let i = 1; i < numbers.length; i++) {
      arr.push(numbers[i]);
      for ( let j = 0 ; j < arr.length-1; j++){
          let temp = arr.join('');
          let cp = [...arr];
          [cp[j],cp[cp.length - 1]] = [cp[cp.length - 1],cp[j]]
          if (Number(temp) < Number(cp.join(''))){
              [arr[j],arr[arr.length - 1]] = [arr[arr.length - 1],arr[j]]
          }
      }
    }
    return arr.join('');
  }

//해당 코드의 경우 이중 for문을 돌고 있어 시간 초과 나는 것 같음 quick sort 등 다른 정렬 알고리즘으로 풀어보기!
//quick sort의 경우 pivot 값을 기준으로 큰 수와 작은 수를 나눠 정력을 하는데, 해당 문제의 경우 기준이 되는 값을 더한 값으로 하고 정렬 돌리기
