function solution(left, right) {
  // 약수의 갯수를 구하는 함수
   function measure(num) {
        let measureNum = 0;
        for(let i = 1; i <= num;i++){
          // 인자가 어떠한 값으로 나눠 떨어지는 수면 그 수는 해당 값의 약수이므로
            if(num%i === 0){
                measureNum += 1
            }
        }
        return measureNum;
    }
    let result = 0;
  //left부터 right까지 돌면서 해당 숫자의 약수의 갯수를 구한 뒤 약수의 갯수가 짝수이면 더하고 홀수이면 뺀다.
    for(let i = left; i<= right;i++){
        if(measure(i)%2 === 0){
            result += i
        }else{
            result -= i
        }
    }
    return result;
}
