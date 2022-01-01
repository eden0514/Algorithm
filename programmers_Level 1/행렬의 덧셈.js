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
