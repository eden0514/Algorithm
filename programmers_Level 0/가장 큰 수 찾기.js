function quick(arr){
    if (arr.length <= 1) return arr;
    let tmp = arr[0];
    let left = [];
    let right = [];
    
    for(let i = 1; i <arr.length ; i++){
        if(tmp > arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),tmp,...quick(right)]
}
function solution(array) { 
    let tmp_arr = quick(array)
    let max = tmp_arr[tmp_arr.length - 1]
    return [max,array.indexOf(max)]
    
}
//quick sork를 이용해서 정렬을 진행 후 제일 큰 값이 array의 마지막 값으로 오게 한 다음 해당 값의 index를 찾아 리턴한다.
//해당 문제는 for문을 돌면서 가장 큰 값을 변수에 할당하는 방식으로 진행하는 것이 제일 쉬운 방법이고 빠른 방법이지만 quick sort를 사용해보고자 위와 같은 방법으로 문제를 풀어보았다.
