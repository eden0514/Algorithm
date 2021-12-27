function solution(sizes) {
  // 이차원 배열 중 0번째 인덱스가 1번쨰 인덱스보다 큰 값을 두게 정렬을 한 다음
    sizes.forEach((arr)=>{
        if(arr[0] < arr[1]){
            [arr[0],arr[1]] = [arr[1],arr[0]]
        }
    })
    
    let firstMax = 0;
    let secMax = 0;
  //0번째 인덱스 중 제일 큰 값과 1번째 인덱스 중 제일 큰 값을 구한다.
    sizes.forEach((el)=>{
        if(el[0] > firstMax){
            firstMax = el[0]
        }
        if(el[1] > secMax){
            secMax = el[1]
        }
    })
  //해당 제일 큰 값들을 곱한 값을 리턴한다.
    return firstMax * secMax;
}
