function quick_sort(arr){
    if(arr.length <= 1) return arr;
    
    let point = arr[0];
    let left = [];
    let right = [];
    for( let i = 1; i < arr.length ; i++){
        if(point.charCodeAt() <= arr[i].charCodeAt()){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return [...quick_sort(left),point,...quick_sort(right)]
}

function solution(my_string) {
    
    let arr = my_string.toLowerCase().split('')
    
    return quick_sort(arr).join('');
    
}
//이번에도 quick sort로 문자열 정렬
//문자열을 순서대로 나열하기 위해 해당 값을 아스키 코드 값으로 비교하여 작은 쪽이 left로 들어가게끔 만듦
