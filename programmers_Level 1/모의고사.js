function solution(answers) {
  //수포자의 각각의 패턴은 다음과 같음
    const pattern_one = [1,2,3,4,5];
    const pattern_two = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern_three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
    //인자로 받은 answers와 패턴 중 일치하는 값만 골라 점수를 매김.
  //function 말고 다른 방법도 확인해보기
    function TestScore (pattern) {
      // 스코어의 기본 값은 0
        let score = 0;
      //해당하는 패턴이 길이까지 다 돌면 다시 처음 순으로 돌아가야 하기 때문에 나머지 연산자를 활용
        let patternLen = pattern.length;
      
        for(let i = 0; i < answers.length;i++){
            if(answers[i] === pattern[i%patternLen]){
                score++;
            }
        }
        return score;
    }
  // TestScore 함수 리턴 값을 배열에 넣어줌
    let arr = [TestScore(pattern_one),TestScore(pattern_two),TestScore(pattern_three)];
    //최댓값을 가진 인덱스를 배열형태로 반환 같은 크기의 값을 가진 것들도 반환
    let result = [];
    let max = Math.max(...arr);
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === max){
          //인덱스가 0부터 시작하기 때문에 1,2,3 맞춰주기 위해 i에 1을 더한 값을 푸쉬함.
            result.push(i+1)
        }
    }
    return result;
    
}
