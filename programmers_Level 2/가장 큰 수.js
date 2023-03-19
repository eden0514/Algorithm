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
