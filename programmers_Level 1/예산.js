function solution(d, budget) {
  //인자 d를 오름차순으로 정렬을 해준다.
    d.sort((a,b)=>a-b);
    let count = 0;
  //d를 돌면서 버짓의 값이 0이 되지 않는 경우까지 반복을 해준다. 해당 값을 뺀 경우에는 count를 올려준다.
    for(let i = 0; i < d.length; i++){
        if(budget - d[i] >= 0){
           budget -= d[i];
            count++; 
        }else break;
    }
    return count;
}
