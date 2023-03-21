//https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript
function solution(number, k) {
    let res = [];
    let arr = number.split('');
    let len = arr.length - k;
    
    for(let i = 0; i < len ; i ++){
        let max = Math.max(...arr);
        res.push(max)
        let idx = arr.indexOf(String(max))
        arr.splice(idx,1)
    }
    return res.join('')
}
//내가 생각했던 방법은 배열에서 제일 큰 값을 구한 뒤 해당 값을 res값에 채워 넣는 형식이었는데
//기대값을 보니 들어오는 number가 만약 "1234"라면 해당 숫자들의 순서는 바뀔 수 없는 것. 해당 값 중 2개를 뽑아 가장 큰 수를 만든다고 하면 내가 생각한 방법대로 43이겠지만
//해당 문제에서 원하는 기대값은 34이다. 그 점을 간과하고 문제에 임했던 것 같다. 다시 생각해보자.
