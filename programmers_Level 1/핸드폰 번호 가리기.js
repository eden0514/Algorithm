function solution(phone_number) {
  //폰넘버의 길이를 변수에 담아준다.
    let len = phone_number.length;
  // 폰 넘버의 맨 뒤 4자리를 복사해놓고
    let last = phone_number.slice(len-4,len)
    //폰넘버 길이에서 -4한 길이만큼 *를 반복해서 작성한 다음 그 이후 마지막 4자리 복사해놓은 번호를 합쳐준다.
    return "*".repeat(len-4)+last
}
