function solution(arr) {
  //만약에 인자인 배열의 길이가 1보다 작은 경우는 제일 작은 수가 사라지면서 해당 배열이 빈 배열이기 때문에 리턴을 [-1]로
    if(arr.length <= 1) return [-1];
    else{
      //1보다 배열의 길이가 긴 경우에는 해당하는 배열에서 제일 작은 값을 알아내고
        let min = Math.min(...arr);
      //필터를 사용해 해당하는 값만 빼준다.
        return arr.filter((el)=> el !== min)
    }
}
