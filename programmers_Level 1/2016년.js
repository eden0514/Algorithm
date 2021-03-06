function solution(a, b) {
  //2016년 1월 1일이 금요일이기 때문에 금요일부터 시작하는 요일 배열을 작성
    let days = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    //각각의 월 별 마지막일을 객체의 형태로 넣어줌. 배열로 해도 상관은 없을 듯하다.
    let month = {1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
    //1월 1일부터 몇 번째 일인지 체크
    let day = 0;
  // 해당하는 달 전까지의 일수 모두 더하고
    for(let i = 1; i <a;i++){
        day += month[i]
    }
  // 해당 해당 일 만큼 더해준 뒤 인덱스에 접근을 하는 것이기 때문에 1을 빼준다.
    day = day+b-1
  //7일이 반복되므로 나머지 연산자를 사용해 나눠준다.
    return days[day%7]
    
}
