function solution(progresses, speeds) {
  //처리 퍼센트와 작업 속도 인자를 가지고 해당하는 인덱스의 일들이 며칠만에 처리되는지를 찾아준다. 단, 만약에 2.333일 걸리는 것은 올림으로 3일 걸린다고 해준다.
    let days = progresses.map((el,idx)=>{
        let day = Math.ceil((100 - el)/speeds[idx]);
        return day;
    })
    //처리하는 데 걸리는 날짜를 담은 배열을 가지고 맨 처음 인덱스보다 큰 값의 인덱스를 찾아주고 큰 값까지의 갯수를 result에 담아주고
    //큰 값을 기준으로 0번째 인덱스부터 그 앞은 잘라준다.
    //days 배열이 0이 될 때까지 반복해준다.
    //단, 만약 첫번째 인자보다 큰 수가 나타나지 않으면 전체 배열의 값을 result에 넣어주고, 배열 전부를 삭제해준 뒤 while문을 빠져나온다.
    let result = [];
        while(days.length > 0){
            const findBigDay = (day) => day > days[0];
            let cutDay = days.findIndex(findBigDay);
            if(cutDay === -1){
              result.push(days.length);
              days.splice(0,days.length)
            }else{
              result.push(cutDay);
              days.splice(0,cutDay);
            }
        }
    
    return result;
}
