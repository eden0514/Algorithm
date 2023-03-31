function solution(n) {
    let result = [];
    for(let i = 1; i <= n;i++){
        if(n%i == 0){
            result.push(i)
        }
    }
    return result;
}
//효율적으로 답을 찾을 수 있는 방법 생각해보기
