//해시 관련 문제인데 해시에 대해서 알아보고 다시 풀어보도록 하자.
function solution(participant, completion) {
  // 인자로 들어온 두 배열을 정렬해준다.
    participant.sort();
    completion.sort();
  // 반복문을 통해 하나씩 비교하다가 두 값이 다른 경우의 participant의 값을 리턴해주면 해당 값이 completion에 없는 값이다.
    for(let i = 0; i < participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}
