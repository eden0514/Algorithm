function solution(n) {
  //10진법에서 다른 진법으로 변경하기 위한 공식 "[바꾸고 싶은 value].toString(변환하고 싶은 진법)"
  //3진법으로 바꾼 수를 배열 형태로 쪼갠 뒤 그 값을 reverse()로 뒤집고 다시 합친다.
    let reverseNum = n.toString(3).split('').reverse().join('');
  //뒤집은 숫자를 다시 10진법으로 표현하기 위한 공식 " Number.parseInt([바꾸고 싶은 value],[현재의 진법])
    return Number.parseInt(reverseNum, 3)
}
