function solution(s, n) {
  //대문자를 배열에 넣은 변수
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  //소문자를 배열에 넣은 변수
    const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // 리턴값을 넣을 변수
    let result = '';
  //s를 돌면서 해당하는 값이 띄워쓰기 부분인지/ 대문자인지/ 소문자인지 구분하고
  //주의할 점은 z다음 다시 a로 돌아와야하기 때문에 %26을 해줌으로써 계속 돌 수 있게 해줌
    for(let i = 0; i < s.length;i++){
      // 띄워쓰기의 경우 똑같이 띄워쓰기를 넣어주고
        if(s[i] === ' '){
            result += ' '
          //대문자인 경우 n만큼 인덱스 뒤에 있는 값으로 변경해준다.
        }else if(upper.includes(s[i])){
            result += upper[(upper.indexOf(s[i])+n)%26]
        }else{
          //소문자인 경우 n만큰 인덱스 뒤에 있는 값으로 변경해준다.
            result += lower[(lower.indexOf(s[i])+n)%26]
        }
    }
    return result;
}
