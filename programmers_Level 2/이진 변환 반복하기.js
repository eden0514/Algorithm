function solution(s) {
  // 들어온 인자를 이진 변환을 반복해서 몇 번 변환을 했는지 count를 세어주고, 변환이 되면서 삭제된 0의 갯수를 deleteZero에 담아준다.
    let deleteZero = 0;
    let count = 0;
  // s가 '1'이 될 때까지 반복을 해야하는 것이므로 while문을 사용
    while(s !== '1'){
      //처음 s의 길이에서 0을 제거한 후의 s의 길이를 빼주면 빠진 0의 갯수를 알 수 있다.
        let sLength = s.length;
        s = s.split('');
        s = s.filter(el=>el !== '0')
        let zeroCount = sLength - s.length;
        deleteZero += zeroCount;
      // 이제 남은 s의 길이를 2진법으로 변환할 것이므로 count를 올려주고, 해당 길이를 2진법으로 변환을 시켜준다.
        count++;
        s = s.length.toString(2);
    }
    return [count,deleteZero];
}
