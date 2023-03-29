function solution(s1, s2) {
    let s1_len = s1.length;
    let s2_len = s2.length;
    let arr;
    let arr2;
    let num = 0;
    if (s1_len >= s2_len){
        arr = s2
        arr2 = s1
    }else{
        arr = s1
        arr2 = s2
    }
    for (let i = 0; i < arr.length; i++){
        if(arr2.includes(arr[i])){
            num++;
        }
    }
    return num;
}
