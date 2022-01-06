function solution(strings, n) {
  // 해당 strings에서 정렬의 기준이 되는 n번째 인덱스 값을 키로 string을 value로 넣어서 객체로 만들어줌.
  //단, 기준의 값이 같은 경우에는 value를 배열의 형태로 만들어 정렬해준다.
    let obj = {};
    let arr = strings.map((el)=>el[n]);
    for(let i=0; i < arr.length;i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = strings[i]
        }else{
            if(!Array.isArray(obj[arr[i]])){
                obj[arr[i]] = [obj[arr[i]]];
            }
            obj[arr[i]].push(strings[i])
            obj[arr[i]].sort();
        }
        
    }
  // 기준이 되는 키 값들을 넣어놓은 배열도 정렬을 시켜 배열의 값들로 obj에서 꺼내 쓸 수 있게 만든다.
    arr.sort();
    let result = [];
  // 근데 만약에 해당 키값의 value가 배열의 형태인 경우에는 배열의 맨 앞에 있는 값을 빼다가 넣어준다.
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(obj[arr[i]])){
            result.push(obj[arr[i]].shift())
        }else{
            result.push(obj[arr[i]])
        }
    }
    return result;

}
