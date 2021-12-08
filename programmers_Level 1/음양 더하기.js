function solution(absolutes, signs) {
  //결과값 변수
    let result = 0;
  //사인을 돌면서 true이면 해당 인덱스의 absolutes의 값을 더해주고, false이면 빼준다.
    for(let i = 0; i < signs.length; i++){
        if(signs[i]){
            result += absolutes[i]
        }else{
            result -= absolutes[i]
        }
    }
  // 모든 배열을 돈 뒤 결과값을 반환함.
    return result;
}
