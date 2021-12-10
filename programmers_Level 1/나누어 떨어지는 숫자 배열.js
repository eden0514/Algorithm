function solution(arr, divisor) {
    //배열을 오름차순으로 변경하고
    arr.sort((a,b)=>a-b);
    //for문을 사용하는 대신 filter를 사용해 해당 값이 나머지 연산자로 나누었을 때 0인 것만 골라내면 된다.
    let result = arr.filter((el)=>el%divisor === 0)
    return result.length ? result : [-1]
    //나눠떨어지는 값이 없으면 [-1]을 반환
}


/*
function solution(arr, divisor) {
    //배열을 오름차순으로 변경하고
    arr.sort((a,b)=>a-b);
    //배열이 divisor로 나눠지는지 확인 후 나눠떨어지는 값을 배열에 담아 리턴
    let result = [];
    for(let i of arr){
        if(i%divisor === 0){
            result.push(i)
        }
    }
    return result.length ? result : [-1]
    //나눠떨어지는 값이 없으면 [-1]을 반환
}

*/
