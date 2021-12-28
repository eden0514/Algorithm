function solution(s) {
  //공백으로 나눠진 문자열을 split을 이용해 공백을 기준으로 나눠 배열로 만들고
    let arr = s.split(' ');
  //해당 배열의 최댓값과 최솟값을 넣어서 리턴해준다.
    return `${Math.min(...arr)} ${Math.max(...arr)}`
}
