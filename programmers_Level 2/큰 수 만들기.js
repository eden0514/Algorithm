//https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript
function solution(number, k) {
    let res = [];
    let arr = number.split('')
    
    for (let i = 0; i < arr.length;i++){
        let current = arr[i];
        while(k > 0 && res[res.length - 1] < current){
            res.pop()
            k--
        }
        res.push(current)
    }
    res.splice(res.length - k, k)
   return res.join('')
}
//우선 로직은 stack으로 사용할 배열 하나르 생성하고
//number의 숫자들을 순회한다.
//stack에 아무 값도 없는 경우에는 현재의 값을 추가한다.
//res의 제일 마지막 값보다 현재 순회하고 있는 숫자가 더 큰 경우 res의 마지막 값을 제거하고 k를 1 감소한다. 왜? 현재 순회하고 있는 값보다 이전에 순회했던 값이 작으므로 해당 숫자는 제거가 된 것이므로
//그 다음 현재의 값을 추가한다.
//현재 순회하는 값보다 res 배열의 마지막 값이 크다면 현재 순회하고 있는 값을 res에 추가한다. 우리는 큰 수를 찾는 것이기 때문에
//아직 이해가 안 가는 부분이 있기는 하다....어렵다.. 위의 부분까지는 이해를 했으나 완벽히 내것이 되기까지 반복 학습하자!
