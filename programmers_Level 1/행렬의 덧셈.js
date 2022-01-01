//for문으로 작성했던 부분을 map을 이용해 다시 작성해본 코드
function solution(arr1, arr2) {
    let result = arr1.map((el,index)=>{
        return el.map((el,idx)=> el+arr2[index][idx])
    })
    return result;
    
}
/*
function solution(arr1, arr2) {
  //인자인 arr1의 값에 arr2의 같은 자리의 값을 더해준다.
    let result = arr1.map((el,idx)=>{
        for(let i = 0; i < el.length;i++){
            el[i] = el[i]+arr2[idx][i]
        }
        return el;
    })
    return result;
    
}
*/
